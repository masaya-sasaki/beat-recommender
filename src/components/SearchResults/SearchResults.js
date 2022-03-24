import React from 'react'
import './SearchResults.css'
import Song from '../Song/Song'

const SearchResults = (props) => {
  return (
    <div className='searchResults'>
        <h2>Search Results</h2>
        <div className='searchResultContainer'>
       {
           props.searchedList.map((track)=>{
               return <Song track={track} addSong={props.addSong} add={true}/>
           })
       }
    </div>
    </div>
  )
}

export default SearchResults