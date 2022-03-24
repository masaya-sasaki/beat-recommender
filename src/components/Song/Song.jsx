import React from 'react'

const Song = (props) => {
    const addSong = () => {
        props.addSong(props.track)
    }

    const handleClick = () => {
        props.removeSong(props.track.id)
    }

  return (
    <div className='search-row'>
    <div className='name-artist'>
        <div>{props.track.name+' '}</div>
        <div className='artist'>{props.track.artist+' '}</div>
    </div>
    {props.add ? <button className='buttons' onClick={addSong}>Add</button> : <button className='buttons' onClick={handleClick}>Remove</button>}
 </div>
  )
}

export default Song