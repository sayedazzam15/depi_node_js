// create todo app using command line 

import {getTodoItems,getFlag} from './helper.mjs';
import { createTodo, showAllTodos, showTodo, updateTodo, deleteTodo } from './todo-crud.mjs' 

handleTodos(process.argv[2]);

function handleTodos(command){
    switch(command){
        case 'create': createTodo(getTodoItems());
        break;
        case 'index': showAllTodos();
        break;
        case 'show': showTodo(getFlag('id'));
        break;
        case 'update': updateTodo(getFlag('id'),getTodos());
        break;
        case 'delete': deleteTodo(getFlag('id'));
        break;
        default: console.log('unsupported command write: [create,show,index,delete,update]');
    }
}