import React from 'react'
import './SongList.css'

const SongList = (props) => {
  const handleClick = (track_id) => {
    props.removeSong(track_id)
  }
  
  return (
    <div className='songLists'>
      <h2>Song List</h2>
    <div className='songListContainer'>
        {
            props.songList.map(track=>{
                return (
                  <div className='search-row'>
                       <div className='name-artist'>
                           <div>{track.name+' '}</div>
                           <div className='artist'>{track.artist+' '}</div>
                       </div>
                       <button className='buttons' onClick={()=>handleClick(track.id)}>Remove</button>
                    </div>
                )
            })
        }
    </div>
    <button onClick={props.getTrackVibes} className='rec-button'>Find Recommendation based on the song list.</button>
    </div>
  )
}

export default SongList