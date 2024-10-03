
// async js
// 1-callback
// function getProducts(cp){
//     let products = [];
//     setTimeout(()=>{
//         products= [
//             {
//                 id: 1,
//                 name: "prod 1"
//             },
//             {
//                 id: 2,
//                 name: "prod 2"
//             },
//             {
//                 id: 3,
//                 name: "prod 3"
//             },
//         ];
//         cp(products);
//     },100);
// }

// getProducts(displayProduct);

// function displayProduct(products){
//     console.log(products);
// }
// console.log('c');
// async function getDataFromRequest(){
//     const response = await fetch();
//     const data  = await response.json();
//     console.log('welcome');
// }







// 2- promise
function getProducts(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const products= [
                {
                    id: 1,
                    name: "prod 1"
                },
                {
                    id: 2,
                    name: "prod 2"
                },
                {
                    id: 3,
                    name: "prod 3"
                },
            ];
            res(products);
        },2000);
    })
}




async function handleProducts(){
    const products = await getProducts();
    const message = await displayProducts(products);
    console.log(message);
    console.log('welcome');
}
handleProducts();

// try {
// } catch (error) {
//     console.log('error');
    
// }

function displayProducts(products){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(products);
            res('display product handler');
        },200);
    })
}



// global , local
// for(let i = 0;i < 5;i++){

// }
// console.log(i);






// function test(){
//     let x = 5;
//     console.log(x);
// }
// test();
// console.log(x);



// event loop
// this binding
// hoisting
// array helper functions ( map, filter,reduce, slice, splice, forEach)
// destructure array and object
// assign array to another array this will share same array address
// rest operator
// types of functions (statement, expression, arrow, self invoking, closure)
// esmodule vs commonjs

// console.log(this);

// let ob1 = {
//     first_name: 'sayed',
//     second_name: 'safwet',
//     fullname:  ()=>{
//         return {
//             first_name: 'mohamed',
//             second_name: 'ahmed',
//             print: ()=>{
//                 console.log(this);
//             }
//         }
//     } 
// }

// ob1.fullname().print();

// let ob2 = {
//     first_name: 'John',
//     second_name: 'Doe',
// }


// ob1.fullname.call(ob2);
// const fullname = function(){
//     console.log(ob2.first_name + ' ' + ob2.second_name);
// };
// fullname();




// function summation(){

// }

// const summation = function(){
    
// }

// const summation = _ => console.log('welcome');
// summation();



// const arr = ["title=title1","description=description1","body=body1"];
// const ob = arr.reduce((obj,item)=>{
//     const [key,value] = item.split('=');
//     obj[key] = value;
//     return obj;
// },{});

// console.log(ob);



// let arr = [1,2,3,4];
// function print(x){
//     x[0] = 'sayed';
// }

// print(...arr);

// console.log(arr);
