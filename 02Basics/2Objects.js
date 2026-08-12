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

// Take a Symbol, add it in object as key and print 
const mySym=Symbol("Key1");

// const JsUser2={
//     fname:"Prateek",
//     lname:"Sharma",
//     age:22,
//     location:"Rajasthan",
//     email:"itsprateek078@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday", "Tuesday"],
//     "full name": "PRATEEK SHARMA",
//     mySym:"Key1"
// }

// I have used symbol as key but not as a symbol still becasue typeof is still --> String

const JsUser2={
    fname:"Prateek",
    lname:"Sharma",
    age:22,
    location:"Rajasthan",
    email:"itsprateek078@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Tuesday"],
    "full name": "PRATEEK SHARMA",
    [mySym]: "myKey1"
}


console.log(typeof JsUser2.mySym);

JsUser2.email="abc@google.com";
console.log(JsUser2);

Object.freeze(JsUser2);

JsUser2.email="abc@microsoft.com"; // It won't give me error, but nevertheless it also wont get changed becuause it is in freezed mode 
console.log(JsUser2);
