// Singleton
// Object.create

// Object Literals 
const JsUser={
    fname:"Prateek",
    lname:"Sharma",
    age:22,
    location:"Rajasthan",
    email:"itsprateek078@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Tuesday"],
    "full name": "PRATEEK SHARMA"
}

console.log(JsUser.email); // 1st way of data retrieval
console.log(JsUser["email"]); // Aliter Way of Data Retrieval 

// console.log(JsUser.full name) -----> Wont be able to access via dot
console.log(JsUser["full name"]);