// Please Do not use var as it operates globally and it can be accessed outside the block
const score=110;
if(score>100){
    var x="Prateek";
    console.log(x);
}
console.log(x); // I should not be able to access X man 


// Using Swith Case Statements 
const boy=3;
const ladka="Prateek"; // Just replace 1,2 and 3 with the string 

switch(boy){
    case 1:
        console.log("Raghav is here !!!");
        break;
    
    case 2:
        console.log("Juyal is here");
        break;

    case 3: 
        console.log("Prateek is here !!");
        break;
        
    default:
        console.log("I am in Default !!");
        break;
}

// Keep in mind, always put break otherwise uske neeche ka sb execute ho jaega 



// ------------------------------------------------------------------------

// Falsy values:
// false,0,-0, BigInt,0N, "", null, undefined, Nan 

// Truthy Values
// "0", 'false', " ", {}, [], function(){} --> Basically Empty Object, function, array everything 


const userEmail=[];
if(userEmail){
    console.log("Got the Email !!");
}
else{
    console.log("Did'nt Got the Mail !!");
}

if(userEmail.length===0)
    console.log("Email is Empty");

const emptyobj={};
if(Object.keys(emptyobj).length==0)
    console.log("Object is Empty !!");

// Null Coaelescing Operator (??) --> It is used to check if the value is null or undefined, if it is then it will return the value on the right side of the operator otherwise it will return the value on the left side of the operator
var val1=100??10;
var val2=null??909;
var val3=null??90??989;
var val4=null??undefined??989;

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// Ternary Operator
const samosaprice=90;
samosaprice<=100 ? console.log("Samosa is cheaper") : console.log("Samosa is Costlier !!")