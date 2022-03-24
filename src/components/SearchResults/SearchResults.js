import React from 'react'
import './SearchResults.css'

const SearchResults = (props) => {
    const addSong = (track) => {
        props.addSong(track)
    }

  return (
    <div className='searchResults'>
        <h2>Search Results</h2>
        <div className='searchResultContainer'>
       {
           props.searchedList.map((track)=>{
               return (
                   <div className='search-row'>
                       <div className='name-artist'>
                           <div>{track.name+' '}</div>
                           <div className='artist'>{track.artist+' '}</div>
                       </div>
                       <button className='buttons' onClick={()=>addSong(track)}>Add</button>
                    </div>
               )
           })
       }
    </div>
    </div>
  )
}

export default SearchResults