import './TodoList.css';
import { TodoItem } from './TodoItem';

function TodoList(props) {
  return (
    <ul className='todo-list'>
      <div className='todo-list__uncompleted'>
        {props.uncompletedTodos.map(todo => {
          if(todo.text.toLocaleLowerCase().includes(props.searchValue.toLocaleLowerCase()) || props.searchValue == "") {
            return <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>}})}  
      </div>
      <div className='todo-list__completed'>
        {props.completedTodos.map(todo => {
          if(todo.text.toLocaleLowerCase().includes(props.searchValue.toLocaleLowerCase()) || props.searchValue == "") {
            return <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>}})}
      </div>
    </ul>
  );
}

export { TodoList };