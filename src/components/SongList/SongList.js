import React from 'react'

const SongList = (props) => {
  return (
    <div>
        {
            props.songList.map(track=>{
                return <div>{track.name} by {track.artist}</div>
            })
        }
        <button onClick={props.getTrackVibes}>Find Recommendation based on the song list.</button>
    </div>
  )
}

export default SongList