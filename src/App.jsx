import "./App.css";
import TodoList from "./Components/Todo List/TodoList";
import AddTodo from "./Components/Add Todo/AddTodo";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { todoAdd, todoDelete, todoEdit, todoFinished } from "./actions/todoactions";
function App() {

  const dispatch = useDispatch();
  const actions = bindActionCreators({todoAdd, todoDelete, todoFinished, todoEdit}, dispatch)

  return (
    <>
      <AddTodo addtodo = {actions.todoAdd}/>
      <TodoList deletetodo = {actions.todoDelete} edittodo = {actions.todoEdit} finishedtodo = {actions.todoFinished}/>
    </>
  );
}

export default App;
