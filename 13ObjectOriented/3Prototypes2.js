let myFname="Prateek";
let myLname="Sharma     ";
let myChannel="Chai    ";

console.log(myFname.length);
console.log(myLname.length);

console.log(myLname.trim().length); // I could do this but i dont want to
// Because let's say if i be having 100 untrimmed things,
// So, i wanna find the length of all those thru some means , That is actually my Ultimate Goal 

// --------------------------------------------------------------------------------------------------

let heroes=["SpiderMan","Bat-Man","Super-Man","HanuMan"];
let heroPower={
    SpiderMan:"Sling",
    BatMan:"Knight-Guard",
    SuperMan:"Flight",
    HanuMan:"Gada",

    getSpideyPower:function(){
        console.log(`SuperPower of SpiderMan is: ${this.SpiderMan}`);
    }
}

// This means that we have entirely modified and added something in the top hierarchy itself so whoever will pass thru it
// Will be following this by every means and then... (For more ref: See the NOTES)
Object.prototype.Prateek=function(){
    console.log("Prateek is present in all Objects !!");
}

// Let us test the same 
heroPower.Prateek();
heroes.Prateek();


// Let's say, I just want to give powers to a lower hierarchy (Only ARRAY)
Array.prototype.Sharma=function(){
    console.log("Sharma is my last name and won't be present into all objects !!");
}

heroes.Sharma();
// heroPower.Sharma(); // This will be throwing an error coz it do not have access of it 


// ------------------------------------------- Inheritance Concept -----------------------------------------

const Teacher={
    makeVideo:true
}

const User={
    name:"Chai1",
    email:"chai@google.com"
}

const TeachingSupport={
    isAvailable:true
}   

const TASupport={
    makeAssignment:true,
    fulltime:true,
    __proto__:TeachingSupport
}

// Teacher can also access all the properties of User
Teacher.__proto__=User; // This is what we call as Prototypical Inheritance 


// Old Syntax
console.log(Teacher.email);

// Modern Syntax
Object.setPrototypeOf(TASupport,TeachingSupport);




// ----------------------------------- Solving the Real World Problem ------------------------------

let anotherUserName="Prateek         ";
String.prototype.truelength=function(){
    console.log(`True Length of this String is: ${this.trim().length}`);
}

anotherUserName.truelength();
