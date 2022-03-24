import React from 'react'
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

const Recommendation = (props) => {
  return (
    <div>
      <h2>Recommendation of keys and tempo</h2>
      {props.recResults.map(item=>{
        return (<div>
          Find a song with the key {keymapping[item.key]} and tempo {item.tempo}BPM
        </div>)
      })}
    </div>
  )
}

export default Recommendation