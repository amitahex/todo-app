import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);
  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTodo(newtodo) {
    const newTodoList = [...todos, { input: newtodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList)

  }
  function handleCompletedTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList)
  }
  function handleSaveData(currentTodo) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodo }));
  }
  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);
  return (
    <>
      <Header todos={todos}></Header>
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Tabs>
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
        selectedTab={selectedTab}
        handleCompletedTodo={handleCompletedTodo}
      ></TodoList>
      <TodoInput handleAddTodo={handleAddTodo}></TodoInput>
    </>
  );
}

export default App;
