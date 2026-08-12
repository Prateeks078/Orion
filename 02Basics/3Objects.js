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

