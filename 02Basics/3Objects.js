const TinderUser=new Object(); // Creating an empty object using Built in Object constructor from JS 
// const TinderUser={}; // Creating an object Literal

TinderUser.id=5078;
TinderUser.name="Darren";
TinderUser.loggedin=true;

console.log(TinderUser);

const RegUser={
    email:"someone@gmail.com",
    name:{
        regname:{
            fname:"Prateek",
            lname:"Sharma"
        }
    }
}

console.log(RegUser.name.regname.fname);

// Combining 2 or more Objects 
obj1={1:"a",2:"b"}
obj2={3:"c", 4:"d"}

// obj3={obj1,obj2}
// console.log(obj3); // I do not want like this format to be combined. I hope u are getting it 

const obj3=Object.assign({},obj1,obj2);
console.log(obj3);

// USING SPREAD OPERATOR
const obj4={...obj1,...obj2};
console.log(obj4);

// Very Impt for Backend Analysing Things
console.log(Object.keys(TinderUser));
console.log(Object.values(TinderUser));
console.log(Object.entries(TinderUser));

console.log(TinderUser.hasOwnProperty("loggedin")); // Should return true
console.log(TinderUser.hasOwnProperty("Login")); // Should return false


// ************************************* De-Structuring of the Object ********************************************

const course={
    name:"Codeforsake",
    price:2499,
    teacher:"Hitesh"
}

// Method-1
console.log(course.teacher); // Very Lengthy to write everytime 

// Aliter-1
const {teacher}=course;
console.log(teacher);

// Aliter-2
const {teacher:tech}=course;
console.log(tech);

// API Response in JSON Format

// {
//     "name":"Codeforsake",
//     "price":2499,
//     "teacher":"Hitesh"
// }

// Api Response could be in Array Format also 
[
    {},
    {},
    {}
]