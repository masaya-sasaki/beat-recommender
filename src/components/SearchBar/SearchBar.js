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
    <div className='searchbar-container'>
        <input value={props.term} onChange={(event)=>handleChange(event)} placeholder='Search tracks with name/artist/albums'></input>
        <button className='search-buttons' onClick={handleClick}>Search</button>
    </div>
  )
}

export default SearchBar