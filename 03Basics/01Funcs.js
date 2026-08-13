function say(){
    console.log("Hi");
}

say();

// More to follow-up
function addnum(num1,num2){
    return num1+num2;
}
console.log(addnum(2,3));


// variant2-- Override happens
function loginmessg(username="Sam"){ // if nothing came into the argument, then it will override 
    return `${username} just logged in the system`; 
}
console.log(loginmessg("George")); 