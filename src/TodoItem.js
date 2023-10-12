import './TodoItem.css';

function TodoItem(props) {
    return (
      <li className={`todo ${props.completed ? "todo-completed" : ""}`}>
        <i className='fa-solid fa-check todo_check'></i>
        <p>{props.text}</p>
        <i className='fa-solid fa-trash todo_delete-button'></i>
      </li>
    );
  }

export { TodoItem };