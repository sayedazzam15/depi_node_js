// create todo app using command line 

import {getTodoItems,getFlag} from './helper.mjs';
import { createTodo, showAllTodos, showTodo, updateTodo, deleteTodo } from './todo-crud.mjs' 
import yargs from 'yargs/yargs';
import {hideBin} from 'yargs/helpers';


yargs(hideBin(process.argv))
.command({
    command: 'index',
    description: "get all todos",
    handler(){
        showAllTodos();
    }    
})
.command({
    command: 'create',
    description: "create new todo",
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            description: "title for new todo"
        },
        description: {
            type: 'string',
            demandOption: true,
            description: "description for new todo"
        },
    },
    handler(argv){
        const {title,description} = argv;
        createTodo({title,description});
    }    
})
.command({
    command: 'delete',
    description: "delete new todo",
    builder: {
        id: {
            type: 'integer',
            demandOption: true,
            description: "id for todo"
        },
    },
    handler(argv){
        const {id} = argv;
        deleteTodo(id);
    }    
})
.parse()
// function handleTodos(command){
//     switch(command){
//         case 'create': createTodo(getTodoItems());
//         break;
//         case 'index': showAllTodos();
//         break;
//         case 'show': showTodo(getFlag('id'));
//         break;
//         case 'update': updateTodo(getFlag('id'),getTodos());
//         break;
//         case 'delete': deleteTodo(getFlag('id'));
//         break;
//         default: console.log('unsupported command write: [create,show,index,delete,update]');
//     }
// }