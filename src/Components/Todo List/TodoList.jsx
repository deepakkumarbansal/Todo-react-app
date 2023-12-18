import React from "react";
import Todo from "../Todo/Todo";
import { useContext } from "react";
import TodoContext from "../../context/TodoContext";

const TodoList = () => {
  const { list, setList } = useContext(TodoContext);
  console.log(list);
  return (
    <ul>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo key={todo.id} todoData={todo.toDoData} isFinished={todo.finished}
            changeFinished={(isfinished) => {
              const updatedList = list.map((t) => {
                if (t.id == todo.id) {
                  t.finished = isfinished;
                }
                return t; // don't return todo
              });
              setList(updatedList);
            }}
            onDelete={()=>{
              const updatedList = list.filter((t)=> t.id != todo.id);
              setList(updatedList)
            }}
            onEdit={(todoText)=>{
              const updatedList = list.map((t)=>{
                if(t.id == todo.id) {
                  t.toDoData = todoText;
                }
                return t;
              })
              setList(updatedList)
            }}
          />
        ))}
    </ul>
  );
};

export default TodoList;
