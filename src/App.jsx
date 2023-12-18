import { useContext, useState } from "react";

import "./App.css";
import TodoList from "./Components/Todo List/TodoList";
import AddTodo from "./Components/Add Todo/AddTodo";
import TodoContext from "./context/TodoContext";

function App() {

const [list, setList] = useState([
  { id: 1, toDoData: "todo 1", finished: false},
  { id: 2, toDoData: "todo 2", finished: true },
]);
  return (
    <TodoContext.Provider value={{list, setList}}>
      <AddTodo updateList = {(todo)=>setList([
        ...list, {id: (list.length + 1),toDoData: todo, finished: false}])}/>
      <TodoList />
    </TodoContext.Provider>
  );
}

export default App;
