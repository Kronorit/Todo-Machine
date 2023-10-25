import './style.css'

function LoadingTodos() {
  return (
    <div className="loading">
      <div className='loading__squares'>
        <span className="loading__square"></span>
        <span className="loading__square"></span>
        <span className="loading__square"></span>
      </div>
      <div className='loading__text'>
        <span>Cargando...</span>
        <span>Por favor espere</span>
      </div>
    </div>
  );
}

export { LoadingTodos };