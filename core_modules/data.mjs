import {readFile,writeFile}  from 'fs/promises';
import {resolve}  from 'path';
const filePath = resolve('./data/todo.json');

export async function getTodos(){
    const data =  await readFile(filePath,{encoding: 'utf8'});
    return data ? JSON.parse(data): [];
}
export async function writeTodos(todos){
    try {
        return await writeFile(filePath,JSON.stringify(todos));
    } catch (error) {
        throw 'error happened will writing to file: ' + error.message;
    }

}
