import './style.css';
import { TodoItem } from '../TodoItem/index';

function renderTodo(todo, searchValue, completeTodo, deleteTodo) {
  if(todo.text.toLocaleLowerCase("en-US").includes(searchValue.toLocaleLowerCase("en-US")) || searchValue === "") {
    return <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}/>}
}

function TodoList(props) {
  return (
    <ul className='todo-list'>
      <div className='todo-list__uncompleted'>
        {props.uncompletedTodos.map(todo => renderTodo(todo, props.searchValue, props.onComplete, props.onDelete))}
      </div>
      <div className='todo-list__completed'>
        {props.completedTodos.map(todo => renderTodo(todo, props.searchValue, props.onComplete, props.onDelete))}  
      </div>
    </ul>
  );
}

export { TodoList };