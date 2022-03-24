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
    <div>Try and find a song with key {props.keys.map(key=>keymapping[key]+',')} with a tempo around {props.tempos.reduce((a,b)=>a+b,0)/props.tempos.length}BPM. </div>
  )
}

export default Recommendation