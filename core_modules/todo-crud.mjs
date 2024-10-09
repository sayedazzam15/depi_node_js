import { getTodos, writeTodos } from "./data.mjs";
import { getFlag } from "./helper.mjs";
import { logger } from "./logger.mjs";

export async function createTodo(data){
    const todos = await getTodos();
    // let id = getFlag('id');
    //  if(!id){
    // }
    const id = todos.length ? todos[todos.length - 1].id + 1: 1; 
    //  id = parseInt(id);
    const todo = {id,...data};
    todos.push(todo);
    await writeTodos(todos);
    return todo;
   
 }
 
 export async function showAllTodos(){
    return await getTodos();
 }
 
 export async function showTodo(id){
     const todos = await getTodos();
     return todos.filter((todo) => todo.id == id);
 }
 
 export async function updateTodo(id,data){
     let todos = await getTodos();
     todos = todos.map((todo) => {
         if(todo.id == id) todo = {...todo,...data};
         return todo;
     });
     await writeTodos(todos);
    return todos.filter((todo) => todo.id == id);
 }
 
 export async function deleteTodo(id){
     let todos = await getTodos();
     todos = todos.filter((todo) => todo.id != id);
     await writeTodos(todos);
     logger('todo deleted successfully','red');
 }
