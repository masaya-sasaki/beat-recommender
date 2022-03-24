import React from 'react'
import './SongList.css'

const SongList = (props) => {
  return (
    <div className='songListContainer'>
      <h2>Song List</h2>
        {
            props.songList.map(track=>{
                return (
                  <div className='search-row'>
                       <div className='name-artist'>
                           <div>{track.name+' '}</div>
                           <div className='artist'>{track.artist+' '}</div>
                       </div>
                       <button className='buttons'>Remove</button>
                    </div>
                )
            })
        }
        <button onClick={props.getTrackVibes} className='rec-button'>Find Recommendation based on the song list.</button>
    </div>
  )
}

export default SongList