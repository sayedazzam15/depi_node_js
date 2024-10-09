import express from 'express';
import { createTodo, deleteTodo, showAllTodos, showTodo, updateTodo } from './todo-crud.mjs';
import schema from './validation/create-todo.mjs';
import path from 'path';
const app = express()
const port = 3000;


// app.use(express.urlencoded());
app.use(express.static(path.resolve('./public')));



app.get('/todos',async (req, res) => {
    const todos = await showAllTodos();
    res.send(todos)
});

app.get('/todos/:id',async (req,res)=>{
    const todo = await showTodo(req.params.id);
    if(!todo.length) res.sendStatus(404);
    else res.send(todo);
});

app.post('/todos',async(req,res)=>{
    try {
        const data = req.body;
        console.log({data});
        
        await schema.validateAsync(data);
        const todo = await createTodo(data);
        res.send(todo);   
    } catch (error) {
        res.send(error,400);   
    }
});


app.delete('/todos/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        await deleteTodo(id);
        res.send({message: `todo ${id} deleted successfully`});   
    } catch (error) {
        res.send(error,400);   
    }
});

// patch put

app.put('/todos/:id',async(req,res)=>{
    try {
        const data = req.body;
        await schema.validateAsync(data);
        res.send(await updateTodo(req.params.id,data));   
    } catch (error) {
        console.log(error);
        
        res.send(error,400);   
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})