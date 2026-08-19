// Hoisting concept is basically like when and where to declare and implement the function definitions and expressions



// --------------> Problem Statement <-------------

console.log(sayadd(5,7)); // This won't be giving error because function is written in such a way...

function sayadd(num1, num2){
    return num1+num2;
}

console.log(mul(5,7)); // This will give me the error 
const mul=function saymul(num1,num2){
    return num1*num2;
}

