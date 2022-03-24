let user_access_token; 
const client_id = 'f7411a9270384747868267ff15a51963';
const redirect_uri = 'http://localhost:3000/';

export const Spotify = {
    getAccessToken(){
        if(user_access_token){
            return user_access_token; 
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if(accessTokenMatch && expiresInMatch){
            user_access_token = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(()=>user_access_token='', expiresIn*1000);
            window.history.pushState('Access Token', null, '/');
            return user_access_token;
        }
        else{
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`
            window.location = accessUrl; 
        }
    },
    search(term){
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
        { headers: {
            Authorization: `Bearer ${accessToken}`
        }}).then(response=>
            {
                return response.json()
            }).then(jsonResponse => {
                if(!jsonResponse.tracks){
                    return [];
                }
                console.log(jsonResponse)
                return jsonResponse.tracks.items.map(track=>({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }))
            })
    },
    getTrackVibes(track_ids){
        if(!track_ids){
            console.log('requires track ids')
            return;
        }
        const access_token = Spotify.getAccessToken();
        const fetchReq1 = fetch(`https://api.spotify.com/v1/audio-analysis/${track_ids[0]}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then(response => response.json())
        .then(jsonResponse => {
            console.log(jsonResponse)
            return {
                key: jsonResponse.track.key,
                tempo: jsonResponse.track.tempo
            }
        })
        const fetchReq2 = fetch(`https://api.spotify.com/v1/audio-analysis/${track_ids[1]}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then(response => response.json())
        .then(jsonResponse => {
            return {
                key: jsonResponse.track.key,
                tempo: jsonResponse.track.tempo
            }
        })
        const fetchReq3 = fetch(`https://api.spotify.com/v1/audio-analysis/${track_ids[2]}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then(response => response.json())
        .then(jsonResponse => {
            return {
                key: jsonResponse.track.key,
                tempo: jsonResponse.track.tempo
            }
        })
        const allData = Promise.all([fetchReq1, fetchReq2, fetchReq3]);
        return allData.then((res)=> res);
    }
}
