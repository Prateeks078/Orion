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
if(Object.keys().length==0)
    console.log("Object is Empty !!");