console.log("Starting Orion !!");

/*
Prefer not to use var and always use const and let for variables
*/

let name="Prateek";
const scholar_num=5078;
let address; // Experiment and dont write the value let's see

console.log(name);
console.log(scholar_num);

// Special way to Print 
console.table([name,scholar_num,address]);
// Address will print as undefined 


// ------------------DataTypes -----------------------

console.log(typeof name);
console.log(typeof null); // gives object
console.log(typeof undefined); // gives undefined 
