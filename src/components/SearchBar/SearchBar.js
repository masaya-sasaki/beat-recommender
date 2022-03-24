import React from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
  const handleChange = (event) => {
    props.setTerm(event.target.value);
  }

  const handleClick = () => {
      props.searchTerm(props.term);
    }

  return (
    <div>
        <input value={props.term} onChange={(event)=>handleChange(event)}></input>
        <button className='buttons' onClick={handleClick}>Search</button>
    </div>
  )
}

export default SearchBar