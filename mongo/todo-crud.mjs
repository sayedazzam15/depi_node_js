import { deleteOne, getTodos, insertTodo, showOne, update, writeTodos, } from "./data.mjs";
import User from "./Model/User.mjs";

export async function createTodo(data){
    const user = await User.findById(data.user_id);
    if(!user) throw new Error('user not found');
    const todo = await insertTodo(data);
    user.todos.push(todo._id);
    await user.save();
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
