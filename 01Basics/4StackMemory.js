/*
Stack Memory is used by Primitive Data Types
Heap Memory is used by Non Primitive Data Types 
*/

// Keep in Mind --> Whoever Goes into the Heap, we gets the reference not the value 


// *************************CASE STUDY-1***************************
let firstname="Prateek";
let fname=firstname;
fname="Nikhil";

console.log(firstname);
console.log(fname);
// Because here copy by value happened into the stack 

// *************************CASE STUDY-2***************************
let obj1={
    name:"Akhil Sachdeva",
    email:"akhil@gmail.com"
}

let obj2=obj1;
obj2.email="prateek@gmail.com";

console.log(obj1);
console.log(obj2);

// We will get the same op because in heap its always by reference....

// If we keep anything in stack, we get the value 
// If we keep anything in heap, we get the reference 