import React, { useContext, useState } from "react";
import todoDispatchContext from "../../context/TodoDispatchContext";

const AddTodo = () => {
    const {dispatch} = useContext(todoDispatchContext)
    const [inputText, setInputText] = useState('');
  return (
    <div>
      <input type="text" placeholder="Add your next Todo" value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/>
      <button onClick={()=>{
        dispatch({type: 'add_todo', payload: {todoText: inputText}})
        setInputText(' ')
        }}>Add</button>
    </div>
  );
};

export default AddTodo;
