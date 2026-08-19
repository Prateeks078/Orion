const user={
    username:"Prateek",
    price:999,
    
    welcomeMesage:function(){
        console.log(`${this.username}, welcome to my world`);
    }
}

user.welcomeMesage();
user.username="Tinku";
user.welcomeMesage();

console.log(user.this); // WILL GIVE EMPTY BECAUSE WE ARE IN A NODE ENVIRONMENT, OUR THIS IS REFERRING TO AN EMPTY OBJECT
// IF I RUN IN MY BROWER, THEN BROWSER KE ANDR GLOBAL OBJECT IS A  WINDOW OBJECT .....


// Some Kind of Mystery
function chai(){
    console.log(this);
}
chai();


function chai1(){
    let uername="HPH";
    console.log(this.username);
}

chai1();
// -----> JavaScript checks the object that this refers to. 
// You never created a username property on that object, we did'nt even created an object man
// So there's nothing to find → undefined.



// -----------> Introduction to Arrow Functions -------------

const person = {
    username: "HPH",

    normal: function () {
        console.log(this.username);
    },

    arrow: () => {
        console.log(this.username);
    }
};

person.normal();
person.arrow(); // It will give undefined because Arrow Functions inherit this from the surrounding function/scope 
// -----------> VERY VERY VERY VERY IMPORTANT <------------


// Ways of writing

// 1st Way 
const addnum=()=>{
    console.log("Hi Preeti");
}
addnum();

// 2nd Way
const addnum1=(num1,num2)=>{return num1+num2}
console.log(addnum1(2,4));

// 3rd Aliter Way
const addnum2=(num1,num2)=>(num2+num2); // Implicit Return 
console.log(addnum2(4,5));

// Miscellanious Way of fetching within the Arrow Functions- FOrmat 1
const displayobj=(num1,num2)=>{
    return {username:"AnC "}
}

// Aliter Format 
const displayobj2=(num1,num2)=>({username:"TeamGenius"})
console.log(displayobj());