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
  const [keys, setKeys] = useState([]);
  const [tempos, setTempos] = useState([]);
  
  const searchTerm = (term) => {
    Spotify.search(term).then(songlist=>{
      setSearchedList(songlist)
    })
  }

  const addSong = (song) => {
    setSongList([...songList, song])
  }

  const getTrackVibes = () => {
    let track_ids = songList.map(track=>track.id)
    Spotify.getTrackVibes(track_ids).then(obj=>{
      console.log(obj)
      const first = obj[0]
      const second = obj[1]
      const third = obj[2]
      setKeys([first.key, second.key, third.key])
      setTempos([first.tempo, second.tempo, third.tempo])
    })
  }


  return (
        <div className='container'>
          <h1>beat-recommender</h1>
            <SearchBar term={term} setTerm={setTerm} searchTerm={searchTerm}>
              This is the searchbar
            </SearchBar>
          <div className='main'>
            <SearchResults searchedList={searchedList} addSong={addSong}>
              This is the search results
            </SearchResults>
            <SongList songList={songList} getTrackVibes={getTrackVibes}>
              This is the song list 
            </SongList>
          </div>
          <Recommendation keys={keys} tempos={tempos}/>
        </div>
  );
}

export default App;
