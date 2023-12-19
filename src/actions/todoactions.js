import { ADD_TODO, DELETE_TODO, EDIT_TODO, FINISH_TODO } from "../constants/actions"

export const todoFinished = (todo, isfinished) => ({type: FINISH_TODO, payload: {todo: todo, isfinished}})
export const todoDelete = (todo) => ({type: DELETE_TODO, payload: {todo}})
export const todoAdd = (inputText) => ({type: ADD_TODO, payload: {todoText: inputText}})
export const todoEdit = (todo, todoText) => ({type: EDIT_TODO, payload: {todoText: todoText, todo: todo}})