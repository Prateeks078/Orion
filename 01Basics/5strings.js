let name="Prateek";
let scholar_num=5078;

// Normal Printing 
console.log(name);
console.log(scholar_num);

// Aliter 
console.log(`My name is: ${name} and My Scholar Number is: ${scholar_num}`);

const UskaNaam="Gaju";
const MeraNaam=new String("Prateek");
console.log(MeraNaam);

// There is a subtle difference between these 2 Terminologies 
console.log(typeof UskaNaam); // String
console.log(typeof MeraNaam); // Object ---> This object comes with so many functions into it which we cab of course use as well

console.log(MeraNaam[0]); // Accessing Key-Value Pairs 

console.log(MeraNaam.length);
console.log(MeraNaam.__proto__); // __proto__ is just a Linkage to the parent object (STRING In our Case)
console.log(MeraNaam.toUpperCase());

console.log(MeraNaam.charAt(2));
console.log(MeraNaam.indexOf('k'));

const newstring=MeraNaam.substring(1,5); // Jut Skips the Last One
console.log(newstring);

const newstring2=MeraNaam.slice(1,3);
console.log(newstring2);


// FACTUAL CHECK
/*
DIFFERENCE BETWEEN SLICE AND SUBSTRING: 

Both has [start,end} But the end one is excluded.
The Main Difference is that Substring Do Not Support -Ve things & Slice Can Support -Ve things

Also In a Substring if Start>End Then both are swapped and Ans is written 
In Slice, if start>end then output is ""

Trim behaves Completely Different. It removes the pre and post spaces, Doesnt care with the middle spaces 
*/

const email="prateek.sharma@humanpoweredhealth.com";
console.log(email.includes("health"));
console.log(email.includes("sundar"));
console.log(email.replace('@','#'));
console.log(email.split('@'));

// ---------------------------- Practice in Console for Further More Methods ---------------------------