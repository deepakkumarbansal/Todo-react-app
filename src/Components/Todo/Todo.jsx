import React, { useState } from "react";

const Todo = ({ todoData, isFinished, changeFinished, onDelete, onEdit }) => {
  const [finished, setFinished] = useState(isFinished);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoData);
  return (
    <div>
      <input
        type="checkbox"
        checked={finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked); // don't use finished
        }}
      />
      {(isEditing) ? <input type="text" value={editText} onChange={(e)=>{setEditText(e.target.value)}}/> : todoData}
      <button
        onClick={() => {
          onEdit(editText);
          setIsEditing(!isEditing);
        }}
      >
        {!isEditing ? "Edit" : "Save"}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Todo;
