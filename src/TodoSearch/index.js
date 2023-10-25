import React from 'react'
import './style.css';
import { TodoContext } from '../TodoContext';

// El estado de react.js es inmutable!!
// Se usa una función para actualizarlo!!

function TodoSearch(){
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  return (
    <input 
      placeholder="Search" 
      className='search-bar' 
      value={searchValue} 
      onChange={(e) => {setSearchValue(e.target.value)}}
    />
  );
}

export { TodoSearch };