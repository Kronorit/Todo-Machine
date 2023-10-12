import React from 'react'
import './TodoSearch.css';

// El estado de react.js es inmutable!!
// Se usa una función para actualizarlo!!

function TodoSearch(props){
    return (
      <input 
        placeholder="Search" 
        className='search-bar' 
        value={props.searchValue} 
        onChange={(e) => {props.setSearchValue(e.target.value)}}
      />
    );
}

export { TodoSearch };