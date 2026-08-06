let name="Prateek";
console.log(name);
console.log(typeof name);
let strname=Number(name);

let age=33;
console.log(typeof age);
let strage=String(age);
console.log(typeof strage);

let isloggedin="Prateek Sharma";
let boolislog=Boolean(isloggedin);
console.log(boolislog);

let isloggedintwo="";
let boolisloggedintwo=Boolean(isloggedintwo);
console.log(boolisloggedintwo);

let num="333abc";
let strnew=String(num);
console.log(typeof strnew);


// ********************************************* Operations ***************************************************
let str1="Prateek is ";
let str2="a Kind Boy !!";

let str3=str1+str2;
console.log(str3);

console.log(1+2);
console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log(1+2+"3");
console.log("3" + 1+ 2);

console.log(+true);
console.log(true+); // Will give error 
console.log(+"");