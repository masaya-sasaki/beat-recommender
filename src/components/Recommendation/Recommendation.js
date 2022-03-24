import React from 'react'
import './Recommendation.css'; 
const keymapping = {
    0: 'C',
    1: 'C♯, D♭',
    2: 'D',
    3: 'D♯, E♭',
    4: 'E',
    5: 'F',
    6: 'F♯, G♭',
    7: 'G',
    8: 'G♯, A♭',
    9: 'A',
    10: 'A♯, B♭',
    11: 'B'
}

const modemapping = {
  0: 'major',
  1: 'minor'
}

const Recommendation = (props) => {
  return (
    <div className='rec-container'>
      <h2>Recommendation of keys and tempo</h2>
      {props.recResults.map(item=>{
        return (<div>
          Find a song that is {keymapping[item.key]}{modemapping[item.mode]} and tempo {item.tempo}BPM
        </div>)
      })}
    </div>
  )
}

export default Recommendation