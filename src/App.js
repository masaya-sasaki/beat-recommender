import React, { useState} from 'react';
import './App.css';
import Recommendation from './components/Recommendation/Recommendation';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import SongList from './components/SongList/SongList';
import { Spotify } from './Spotify';

function App() {
  const [term, setTerm] = useState('')
  const [searchedList, setSearchedList] = useState([])
  const [songList, setSongList] = useState([])
  const [recResults, setRecResults] = useState([])
  
  const searchTerm = (term) => {
    Spotify.search(term).then(songlist=>{
      setSearchedList(songlist)
    })
  }

  const addSong = (song) => {
    setSongList([...songList, song])
  }

  const removeSong = (track_id) => {
    setSongList(songList.filter(song=>song.id!==track_id))
  }

  async function getTrackKeyAndTempo(track_ids){
    const keyAndTempoList = await Spotify.getTrackVibes(track_ids)
    setRecResults(keyAndTempoList);
  }

  const getTrackVibes = () => {
    let track_ids = songList.map(track=>track.id)
    getTrackKeyAndTempo(track_ids)
  }


  return (
        <div className='container'>
          <h1>Spotify Beat-Recommender</h1>
          <p>Search songs and add them to the songlist and click on the recommendation button to receive a recommendation of the key and tempo of a beat.</p>
            <SearchBar term={term} setTerm={setTerm} searchTerm={searchTerm}>
              This is the searchbar
            </SearchBar>
          <div className='main'>
            <SearchResults searchedList={searchedList} addSong={addSong}>
              This is the search results
            </SearchResults>
            <SongList songList={songList} getTrackVibes={getTrackVibes} removeSong={removeSong}>
              This is the song list 
            </SongList>
          </div>
          <Recommendation recResults={recResults}/>
        </div>
  );
}

export default App;
