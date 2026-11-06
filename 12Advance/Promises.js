const PromiseOne=new Promise(function(resolve,reject){
    // Any Sort of Asynce Task
    // Any Sort of DB Calls 
    // Any Sort of Cryptography Calls 
    setTimeout(function(){
        console.log("Async Task is Completed !!");
        resolve();
    },2000)
});

PromiseOne.then(function(){
    console.log("Promise Consumed !!")
})


// Alternative Way I am seeding over here 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task2 is Almost Done !!");
        resolve();
    },6000);
}).then(function(){
    console.log("Promise 2 is Now Being Consumed !!");
})


// Third Promise creation and learning of passing the data over crossed bridge
const thirdPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"Prateek Sharma",
            email:"itsprateek078@gmail.com"
        }) // I Passed an Object over here....
    },5000)
})

thirdPromise.then(function(user){
    console.log(user);
})