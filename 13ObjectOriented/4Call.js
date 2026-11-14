// Problem: 
// JavaScript sees this as a completely normal function call.
// It doesn't automatically know that you want to add username to the object being created by CreateUser.
//It's like you've created an object, but you haven't told the other function which object it should work on.
function SetUserName(username){
    this.username=username;
    console.log("Called Up");
}

// Solution:
// Use .call as follows
// First argument: this,  
// Tells the function which object's this to use.

// Second argument: username
// The actual function parameter.

function CreateUser(username, email, password){
    SetUserName.call(this,username);

    this.email=email;
    this.password=password;
}

const u1=new CreateUser("Chiku","chai@gmail.com", "yui");
console.log(u1);


//------------------------- Explain it as a whole progress for a complete Feel -------------------
