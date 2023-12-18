function todoReducer(state, action) {

    if (action.type == 'add_todo') {
        let todoText = action.payload.todoText
        return [...state, { id: (state.length + 1), toDoData: todoText, finished: false }]
    } 

    else if (action.type == 'edit_todo') {
        let todo = action.payload.todo;
        let todoText = action.payload.todoText;
        const updatedList = state.map((t) => {
            if (t.id == todo.id) {
                t.toDoData = todoText;
            }
            return t;
        })
        return updatedList;
    } 

    else if (action.type == 'delete_todo') {
        let todo = action.payload.todo;
        const updatedList = state.filter((t) => t.id != todo.id);
        return updatedList
    }

    else if (action.type == 'finished_todo'){
        let todo = action.payload.todo;
        let isfinished = action.type.isfinished;
        const updatedList = state.map((t) => {
            if (t.id == todo.id) {
              t.finished = isfinished;
            }
            return t; // don't return todo
          });
        return updatedList;
    }
}

export default todoReducer;