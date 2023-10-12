import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text:'Cortar cebolla', completed: false},
  {text:'Cortar manzana', completed: true},
  {text:'Cortar Pera', completed: false},
  {text:'Cortar Sandía', completed: true},
]

/*
  Esto es un componente.
  Funciones con letras mayusculas es un componente.
  Por dentro tiene JSX (Javascript XML).
  Letras en minusculas son elementos de react.
  El return debe devolver UN elemento el cuál puede tener todos los elementos que deseemos.
  React.Fragment devuelve un fragmento de react.
*/
function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={5} total={25} /> {/* Componenetes de otro archivo insertados como elementos. */}
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo)=>{
          return <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/> /*todos los props deberían tener una key*/
        })}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
