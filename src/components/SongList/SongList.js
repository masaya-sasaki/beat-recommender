import React from 'react'
import Song from '../Song/Song'
import './SongList.css'

const SongList = (props) => {
  return (
    <div className='songLists'>
      <h2>Song List</h2>
    <div className='songListContainer'>
        {
            props.songList.map(track=>{
                return <Song track={track} removeSong={props.removeSong} add={false}/>
            })
        }
    </div>
    <button onClick={props.getTrackVibes} className='rec-button'>Find Recommendation based on the song list.</button>
    </div>
  )
}

export default SongList