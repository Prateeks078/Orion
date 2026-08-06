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
// console.log(true+); // Will give error 
console.log(+"");


// SOME FACTUAL CHECKS 
console.log(null > 0); // false
// Comparison (>) converts null to a number before comparing.
// null is converted to 0.
// 0 > 0 is false.

console.log(null == 0); // false
// The equality check (==) does not convert null to a number.
// null is only equal to undefined in loose equality (==), not to numbers.
// So, null == 0 is false.

console.log(null >= 0); // true
// The >= comparison also converts null to a number (0).
// It becomes 0 >= 0, which is true.

console.log(undefined > 0);
console.log(undefined  == 0);
console.log(undefined  >= 0);
// It gives false in all the three cases 



// == does normal checks (It accepts conversion)
// === does strict checking (No flexibility for conversion)
console.log("2"==2); // Will pass kuki it accepts conversion 
console.log("2"===2); // Will do a strict checking