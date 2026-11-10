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
