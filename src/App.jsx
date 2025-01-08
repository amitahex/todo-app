import { useState } from "react";
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
  }

  function handleDeleteTodo(index) {

  }
  function handleCompletedTodo(index) {
    
  }
  return (
    <>
      <Header todos={todos}></Header>
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Tabs>
      <TodoList todos={todos} selectedTab={selectedTab} handleCompletedTodo={handleCompletedTodo}></TodoList>
      <TodoInput handleAddTodo={handleAddTodo}></TodoInput>
    </>
  );
}

export default App;
