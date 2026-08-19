// IIFE (Immediately Invoked Function Expressions)

/*
For an example, I have written a DB Connection Code File and 
I want it to execute as soon as my Web-App Starts. Hence I will
be using the IIFE's Concepts..
*/

// --> Named IIFE
// --> UN-Named IIFE
// --> Passing Parameter and arguments in IIFE


// 1. NORMAL MODE
function chai(){
    console.log("DB CONNECTED !!");
}
chai();

// 2. WITH NAMED IIFE
(function chai1(name){
    console.log(`DB CONNECTED THRU NAMED iife ${name}`)
})("Tony"); // VEry Very Important
// If you will be writing 2 consecutive IIFE's then this semicolon is very very important thing 

// 3. UN-NAMED IIFE
((name)=>{
    console.log(`DB is connected through Arrow Writing ${name}!!`)
})("Prateek")

