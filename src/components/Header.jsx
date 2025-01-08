/* eslint-disable react/prop-types */
export function Header(props) {
  const { todos } = props;
  const todosCounts = todos.length;
  const istaskortasks = todos.length != 1 ? "tasks" : "task";
  return (
    <header>
      <h1 className="text-gradient">
        You have {todosCounts} open {istaskortasks}.
      </h1>
    </header>
  );
}
