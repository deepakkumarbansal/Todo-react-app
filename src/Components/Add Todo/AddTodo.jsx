import { useState } from "react";
const AddTodo = ({addtodo}) => {
  //const dispatch = useDispatch(); // not good practice give access of action instead
    const [inputText, setInputText] = useState('');
  return (
    <div>
      <input type="text" placeholder="Add your next Todo" value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/>
      <button onClick={()=>{
        addtodo(inputText)
        setInputText(' ')
        }}>Add</button>
    </div>
  );
};

export default AddTodo;
