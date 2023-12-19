import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const TodoList = ({edittodo, deletetodo, finishedtodo}) => {
  
  //const dispatch = useDispatch(); //A hook to access the redux dispatch function.
  const list = useSelector((state)=>state.todo) //A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.

  function onFinished(todo, isfinished){
    //dispatch(todoFinished(todo, isfinished))
    finishedtodo(todo, isfinished)
  }

  function onDelete(todo){
    // dispatch(todoDelete(todo))
    deletetodo(todo)
  }


  return (
    <ul>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo key={todo.id} todoData={todo.toDoData} isFinished={todo.finished}
            changeFinished={(isfinished)=>onFinished(todo, isfinished)}
            onDelete={()=>onDelete(todo)}
            // onEdit={(todoText)=>dispatch(todoEdit(todo,todoText))}
            onEdit={(todoText)=>edittodo(todo, todoText)}
            />
        ))}
    </ul>
  );
};

export default TodoList;
