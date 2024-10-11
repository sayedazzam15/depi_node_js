import { deleteOne, getTodos, insertTodo, showOne, update, writeTodos, } from "./data.mjs";

export async function createTodo(data){
    await insertTodo(data);
 }
 
 export async function showAllTodos(){
    return await getTodos();
 }
 
 export async function showTodo(id){
     return await showOne(id);
 }
 
 export async function updateTodo(id,data){
    return await update(id,data);
 }
 
 export async function deleteTodo(id){
     await deleteOne(id);
 }
