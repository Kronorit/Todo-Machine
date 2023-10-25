import { TodoContext } from '../TodoContext';
import './style.css';
import React from 'react';

/* 
  props se pasa como parametro pero no lo identificamos como un parametro.
  props es un objeto con las props envíadas al invocar el componente.
*/

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);
  
  return (
    <h1 className="todo-counter">
      Has completado <span>{completedTodos.length}</span> de <span>{totalTodos}</span> todos.
    </h1>
    );
  }

export { TodoCounter };