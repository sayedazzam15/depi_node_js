import {readFile,writeFile}  from 'fs/promises';
import {resolve}  from 'path';
const filePath = resolve('./data/todo.json');
import db_connection from './db.connection.mjs';
import Todo from './Model/Todo.mjs';


export async function getTodos(){
    return await Todo.find()
}
export async function showOne(id){
    return await Todo.findById(id)
}
export async function insertTodo(data){
    return await Todo.create(data)
}
export async function update(id,data){
    return await Todo.updateOne({_id: id} , data);
}
export async function deleteOne(id){
    return await Todo.deleteOne({_id: id});
}

export async function writeTodos(todos){
    try {
        return await writeFile(filePath,JSON.stringify(todos));
    } catch (error) {
        throw 'error happened will writing to file: ' + error.message;
    }

}