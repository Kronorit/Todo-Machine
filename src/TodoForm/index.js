import React from 'react';
import { TodoContext } from '../TodoContext';
import './style.css'

function TodoForm() {
  const [todoText, setTodoText] = React.useState('');

  const {setOpenModal, addTodo} = React.useContext(TodoContext);

  return (
    <div className='todoForm-container'>
      <form className="todoForm" onSubmit={(e) => {
        e.preventDefault();
        if(todoText === '') {
          alert('La tarea no puede estar vacía.')
        }
        else {
          addTodo(todoText);
          setOpenModal(false);
        }
      }}>
        <label className='todoForm__title'>Ingresa la tarea que quieres crear</label>
        <textarea 
          className='todoForm__text' 
          placeholder="Escribe aquí la tarea pendiente"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <div className='todoForm__buttons-container'>
          <button className='todoForm__button todoForm__cancel-button' onClick={(e) =>{
            e.preventDefault();
            setOpenModal(false);
          }}
          >
            Cerrar
          </button>
          <button type="submit" 
                  className='todoForm__button todoForm__save-button'
                 >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export { TodoForm }