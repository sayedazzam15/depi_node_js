// os , path , fs , http , event
const os = require('os');
// console.log('sayed');
// console.log(os.EOL);
// console.log('safwet');


const path = require('path');
const file1 = path.join('./data/todo.json');
// const file2 = path.resolve('./data/todo.json');
// console.log(file1,os.EOL,file2);



// read file 

// write file
// append file
// create file
// delete file
// if file exist
// create directory
// delete directory
// if directory exist
// check file permission
// change file/folder permission 
// const { readFile } = require('node:fs/promises');
// const {writeFileSync} = require('fs');
// const { resolve } = require('node:path');

// const todos = [
//     {
//         "id":1,
//         "title": "teach core module session"
//     },
//     {
//         "id":2,
//         "title": "teach fs module"
//     },
// ]

// async function logFile() {
//   try {
//     const filePath = resolve('./data/todo.json');
//     writeFileSync(filePath,JSON.stringify(todos));
//     // const content = readFileSync(filePath,{encoding: 'utf8'});
//     // const content = await readFile(filePath,{encoding: 'utf8'});
//     // console.log(res);
    
//   } catch (err) {
//     console.error(err.message);
//   }
// }
// logFile();



