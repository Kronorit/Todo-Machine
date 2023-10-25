import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { LoadingTodos } from '../LoadingTodos';
import { ErrorTodos } from '../ErrorTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const {completedTodos, 
         uncompletedTodos, 
         searchValue, 
         completeTodo,
         deleteTodo,
         loading,
         error,
         openModal,
  } = React.useContext(TodoContext);

  return (
    <>
      {loading && <LoadingTodos/>}
      {!loading && error && <ErrorTodos/>}
      {!loading && !error && <>
        <TodoCounter/>
  
        <TodoSearch/>

        <TodoList 
          completedTodos={completedTodos} 
          uncompletedTodos={uncompletedTodos} 
          searchValue={searchValue}
          onComplete={completeTodo}
          onDelete={deleteTodo}
          loading = {loading}
          error = {error}/>
    
        <CreateTodoButton/>

        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}
      </>}
    </>
  );
}

export { AppUI }
