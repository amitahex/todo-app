/* eslint-disable react/prop-types */
export function TodoCard(props) {
  const { todo , todoIndex } = props;
  const todos = todo;
  console.log(props);
  return (
    <div className="card todo-item">
      <p>{todos.input}</p>
      <div className="todo-buttons">
        <button className="" disabled={todos.complete}>
          <h6>Done</h6>
        </button>
        <button className="">
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
