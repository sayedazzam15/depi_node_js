import mongoose from 'mongoose';

export default (()=>{
    mongoose.connect('mongodb://localhost/todo-app')
    .then(() => console.log('connected to database'))
    .catch((err) => console.log('error while connecting to database: ' + err.message))
})()