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


// Fourth Promise to Illustrate the functioning of CATCH & CHAINING both
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 100 is happening over here !!")

        let error=true;
        if(!error){
            resolve({
                username:"Chiku",
                usercode:6879
            });
        }else{
            reject("ERROR: Something went very wrong Over here !!")
        }
    },7000)
});

// const user1=promiseFour.then(function(user){
//     console.log(user);
// })

// console.log(user1); // This will return a Promise Object because the promise is still in pending state and not yet resolved or rejected

promiseFour
.then(function(user){
    console.log(user);
    return user;
})
.then((user)=>{
    console.log(user.username);
    return user.username;
})
.catch(function(err){
    console.log(err);
})
.finally(()=>{
    console.log("Promise is either resolved or rejected, it will always be running anyhow !!")
})


// Fifth Promise to Illustrate the use of Async-Await Functionality
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Js Task 101 is happening over here !!");
        
        let error=true;
        if(!error){
            resolve({
                username:"Gaju",
                usercode:9009
            });
        }
        else{
            reject("ERROR: 404 Not Found !!")
        }
    },8000)
});

// Now Handling with the help of Async-Await Functionality
