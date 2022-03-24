import React from 'react'
import './SearchResults.css'

const SearchResults = (props) => {
    const addSong = (track) => {
        props.addSong(track)
    }

  return (
    <div className='searchResultContainer'>
       {
           props.searchedList.map(track=>{
               return (
                   <div>
                       <span>
                       {track.name+' '}
                       </span>
                       <span>
                        by {track.artist+' '}
                       </span>
                       <button onClick={()=>addSong(track)}>+</button>
                       <button>-</button>
                    </div>
               )
           })
       }
    </div>
  )
}

export default SearchResults