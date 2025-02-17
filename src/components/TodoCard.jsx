export function TodoCard(props) {
  const { todo, todoIndex, handleDeleteTodo, handleCompletedTodo } = props;
  const todos = todo;
  console.log(props);
  return (
    <div className="card todo-item">
      <p>{todos.input}</p>
      <div className="todo-buttons">
        <button
          className=""
          disabled={todos.complete}
          onClick={() => {
            handleCompletedTodo(todoIndex);
          }}
        >
          <h6>Done</h6>
        </button>
        <button
          className=""
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
