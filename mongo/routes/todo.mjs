
import { createTodo, deleteTodo, showAllTodos, showTodo, updateTodo } from '../todo-crud.mjs';
import schema from '../validation/create-todo.mjs';
import express from 'express';
const router = express.Router()
// /todos
router.get('/',async (req, res) => {
    const todos = await showAllTodos();
    res.send(todos)
});

router.get('/:id',async (req,res)=>{
    const todo = await showTodo(req.params.id);
    if(!todo) res.sendStatus(404);
    else res.send(todo);
});

router.post('/',async(req,res)=>{
    try {
        const data = req.body;
        await schema.validateAsync(data);
        await createTodo(data);
        res.status(201).send(); 
    } catch (error) {
        const errorMessage = error.message ?  {message: error.message} : error;
        res.status(400).send(errorMessage);   
    }
});


router.delete('/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        await deleteTodo(id);
        res.send({message: `todo ${id} deleted successfully`});   
    } catch (error) {
        res.send(error,400);   
    }
});

// patch put

router.put('/:id',async(req,res)=>{
    try {
        const data = req.body;
        await schema.validateAsync(data);
        res.send(await updateTodo(req.params.id,data));   
    } catch (error) {
        console.log(error);
        res.send(error,400);   
    }
});
export default router;