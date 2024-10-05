export function getTodoItems(){
    const items = process.argv.slice(3);
    return items.reduce((obj,item)=>{
        const [key,value] = item.split('=');
        obj[key.replace('--','')] = value;
        return obj;
    } ,{});
}

export function getFlag(flag){
    const todos = getTodoItems();
    for (const key in todos) {
       if(key == flag){
         return todos[key];
       }
    };
}

