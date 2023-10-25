import React from 'react';
import './style.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
  const { setOpenModal} = React.useContext(TodoContext);

  return (
    <button className='create-todo-button' 
      onClick={() => {setOpenModal(true)}}
    >
      <i className='fa-solid fa-plus'></i>
    </button>
  );
}

export { CreateTodoButton };