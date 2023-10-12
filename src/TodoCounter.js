import './TodoCounter.css';

/* 
  props se pasa como parametro pero no lo identificamos como un parametro.
  props es un objeto con las props envíadas al invocar el componente.
*/

function TodoCounter(props) {
    return (
      <h1 className="todo-counter">
        Has completado <span>{props.completed}</span> de <span>{props.total}</span> todos.
      </h1>
    );
  }

export { TodoCounter };