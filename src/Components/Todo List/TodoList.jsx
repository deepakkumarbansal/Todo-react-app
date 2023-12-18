import React from "react";
import Todo from "../Todo/Todo";
import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import TodoDispatchContext from "../../context/TodoDispatchContext";

const TodoList = () => {
  
  const { list} = useContext(TodoContext);
  const {dispatch} = useContext(TodoDispatchContext);
  
  function onFinished(todo, isfinished){
    dispatch({type: 'finished_todo', payload: {todo: todo, isfinished}})
  }

  function onDelete(todo){
    dispatch({type: 'delete_todo', payload: {todo}})
  }


  return (
    <ul>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo key={todo.id} todoData={todo.toDoData} isFinished={todo.finished}
            changeFinished={(isfinished)=>onFinished(todo, isfinished)}
            onDelete={()=>onDelete(todo)}
            onEdit={(todoText)=>dispatch({type: 'edit_todo', payload: {todoText: todoText, todo: todo}})}
          />
        ))}
    </ul>
  );
};

export default TodoList;
