import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text:'Córtar cebolla', completed: !false},
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
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const uncompletedTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);
  const totalTodos = todos.length;

  function completeTodo(text) {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  function deleteTodo(text) {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>

      <TodoCounter 
        completed={completedTodos.length} 
        total={totalTodos} /> {/* Componenetes de otro archivo insertados como elementos. */}
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue ={setSearchValue}/>

      <TodoList 
        completedTodos={completedTodos} 
        uncompletedTodos={uncompletedTodos} 
        setTodos={setTodos} 
        searchValue={searchValue}
        onComplete={completeTodo}
        onDelete={deleteTodo}/>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
