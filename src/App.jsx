import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <>
    <Header></Header>
    <Tabs></Tabs>
    <TodoList></TodoList>
    <TodoInput></TodoInput>
    </>
  )
}

export default App;
