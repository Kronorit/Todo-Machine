import './style.css';

function animation_deletingTodo(element) {

}

function TodoItem(props) {
    return (
      <li className={`todo ${props.completed ? "todo-completed" : ""}`}>
        <i 
          onClick={props.onComplete}
          className='fa-solid fa-check todo_check'></i>
        <p>{props.text}</p>
        <i 
          onClick={props.onDelete}
          className='fa-solid fa-trash todo_delete-button'></i>
      </li>
    );
  }

export { TodoItem };