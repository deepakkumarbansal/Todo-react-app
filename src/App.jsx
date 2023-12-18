import { useContext, useReducer, useState } from "react";

import "./App.css";
import TodoList from "./Components/Todo List/TodoList";
import AddTodo from "./Components/Add Todo/AddTodo";
import TodoContext from "./context/TodoContext";
import todoReducer from "./reducers/todoReducer";
import TodoDispatchContext from "./context/TodoDispatchContext";
function App() {

  const [list, dispatch] = useReducer(todoReducer, [{ id: 1, toDoData: "todo 1", finished: false}, { id: 2, toDoData: "todo 2", finished: true }]);

  return ( 
    <TodoContext.Provider value={{list}}> {/* using dispatch instead of setList because it is not available now */}
      <TodoDispatchContext.Provider value={{dispatch}}>  {/* we can pass dispatch method from TodoContext.Provider component's value like <TodoContext.Provider value={{list, dispatch}}> but it's not a good practice. So we pass it in another context*/}
    {/* <AddTodo updateList = {(todo)=>dispatch({type: 'add_todo', payload: {todoText: todo}})}/> {/* Yha humne ek action dispatch(execute) kiya hai. dispatch method takes one argument that is action object. dispatch method transfers list and action object to todoReducer internally*/}
      <AddTodo/> {/* No need provide updateList because we have provided context of dispatch */}
      <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
  
}

export default App;
