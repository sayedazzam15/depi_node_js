// http module
import {createServer} from 'http';
import { createTodo, deleteTodo, showAllTodos, showTodo } from './todo-crud.mjs';
import schema from './validation/create-todo.mjs';
// validation schema {title: required string desc}








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
        let payload = {};
        req.on('data', data => {
            if(!payload.length) payload = '';
            payload += data.toString();
        });
        req.on('end',async _ =>{
            try {
                const data = JSON.parse(payload);
                await schema.validateAsync(data);
                const todo = await createTodo(data);
                res.writeHead(201,{'Content-Type': 'application/json'});
                res.end(JSON.stringify(todo));
            } catch (error) {
                res.writeHead(400,{'Content-Type': 'application/json'});
                res.end(JSON.stringify(error));
            }
        })
    }else if(req.url.match(/^\/todos\/(\d+)$/) && req.method == 'DELETE'){
        const slashIndex = req.url.lastIndexOf('/');
        const id = req.url.slice(slashIndex +1);
        await deleteTodo(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: `todo ${id} deleted successfully`}));
    }

});

server.listen(3000,()=>{
    console.log('listening on port 3000');
})