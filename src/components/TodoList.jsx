/* eslint-disable react/prop-types */
import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos, selectedTab } = props;
  const tab = selectedTab;
  const filterTodoList =
    tab === "All"
      ? todos
      : tab === "Open"
      ? todos.filter((val) => !val.complete)
      : todos.filter((val) => val.complete);
  console.log(filterTodoList);
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todo={todo}
            todoIndex={todos.findIndex((val) => val.input == todo.input)}
            {...props}
          ></TodoCard>
        );
      })}
    </>
  );
}
