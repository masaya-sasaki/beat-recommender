import React from 'react';
import './App.css';
import Recommendation from './components/Recommendation/Recommendation';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import SongList from './components/SongList/SongList';

function App() {
  return (
        <div className='container'>
          <h1>beat-recommender</h1>
            <SearchBar>
              This is the searchbar
            </SearchBar>
          <div className='main'>
            <SearchResults>
              This is the search results
            </SearchResults>
            <SongList>
              This is the song list 
            </SongList>
          </div>
          <Recommendation>
            This is the result recommendation 
          </Recommendation>
        </div>
  );
}

export default App;
