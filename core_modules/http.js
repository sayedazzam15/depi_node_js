// http module
import {createServer} from 'http';
import { showAllTodos, showTodo } from './todo-crud.mjs';
const server = createServer(async(req,res)=>{
    if(req.url =='/todos' && req.method == 'GET'){
        const todos = await showAllTodos();
        res.end(JSON.stringify(todos));
    }else if(req.url.match(/^\/todos\/(\d+)$/) && req.method == 'GET'){
        const slashIndex = req.url.lastIndexOf('/');
        const id = req.url.slice(slashIndex +1);
        const todo = await showTodo(id);
        if(todo.length){
            res.end(JSON.stringify(todo));
        }else{
            res.end('not found');
        }
    }else if(req.url =='/todos' && req.method == 'POST'){
        console.log(req.data);
        res.end();
    }
    // get single todo  -> method get
    // create todo -> method post
    // update todo  -> method put
    // delete todo  -> method delete

    // if(req.url == '/users'){
        
    // }else if(req.url == '/todos'){
    // }else{
    // }
});

server.listen(3000,()=>{
    console.log('listening on port 3000');
})