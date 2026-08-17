function say(){
    console.log("Hi");
}

say();

// More to follow-up
function addnum(num1,num2){
    return num1+num2;
}
console.log(addnum(2,3));


// variant2-- Override happ
function loginmessg(username="Sam"){ // if nothing came into the argument, then it will override 
    return `${username} just logged in the system`; 
}
console.log(loginmessg("George Baileyy")); 


// Variant-1 
function calculateprice(num){
 return num;
}
console.log(calculateprice(500));

// Variant-2
function calculatePrice1(...val){ // We Call this as REST Operator  
    // I know it can also be called as Spread Operator, but here it is different scenario
    return val;
}
console.log(calculatePrice1(500,600,700));

// Variant-3
function calculatePrice2(x1,x2,...val){
    console.log(x1);
    console.log(x2);
    return val;
}
console.log(calculatePrice2(500,600,890));


// FAQ Concepts
// Passing Objects as Parameters in Functions
const user={
    username:"Prateek",
    price:390
}

function handleobject(anyobject){
    console.log(`The name of User is: ${anyobject.username} and the Price of the User is:${anyobject.price}`);
}

// Invoking the Function
handleobject(user); // I can pass whichever Object I want to 