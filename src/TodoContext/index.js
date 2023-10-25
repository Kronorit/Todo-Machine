import React from 'react';
import { useLocalStorage } from './useLocalStorage';


const TodoContext = React.createContext();
const API = 'todos';

function TodoProvider({ children }) {
  const {item: todos, saveItem: setTodos, loading, error} = useLocalStorage(API, []);
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
    <TodoContext.Provider value={{loading,
                                 error,
                                 completedTodos,
                                 uncompletedTodos,
                                 totalTodos,
                                 searchValue,
                                 setSearchValue,
                                 completeTodo,
                                 deleteTodo}}>
      {children}
    </TodoContext.Provider>
  );
}

export {TodoContext, TodoProvider};