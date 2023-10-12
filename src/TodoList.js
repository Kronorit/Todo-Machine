import './TodoList.css';
import { TodoItem } from './TodoItem';

function renderTodo(todo, searchValue) {
  if(todo.text.toLocaleLowerCase("en-US").includes(searchValue.toLocaleLowerCase("en-US")) || searchValue == "") {
    return <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>}
}

function TodoList(props) {
  return (
    <ul className='todo-list'>
      <div className='todo-list__uncompleted'>
        {props.uncompletedTodos.length == 0 ? "No uncompleted tasks here." : props.uncompletedTodos.map(todo => renderTodo(todo, props.searchValue))}
      </div>
      <div className='todo-list__completed'>
        {props.completedTodos.legnth == 0 ? 'No completed tasks here.' : props.completedTodos.map(todo => renderTodo(todo, props.searchValue))}  
      </div>
    </ul>
  );
}

export { TodoList };