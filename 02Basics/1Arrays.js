const arr1=[1,3,5,6,8,"PRATEEK"];
console.log(arr1); 

// Arrays in JS follow the Shallow Copy Means a copy whose properties do share the same references Means Copy By Reference whereas 
// Deep Copy Means a copy whose properties do not share the same references Means Just Copied by the Value

arr1.push(67);
console.log(arr1);

const newArr=arr1.join();
console.log(arr1);
console.log(newArr);


// ******************** MAJOR DIFFERENCE BETWEEN SLICE & SPLICE **********************

const myarr=[0,1,2,3,4,5];
console.log("Original Array: ", myarr);

const myarr1=myarr.slice(1,3);
console.log("Sliced Array: ", myarr1);

const myarr2=myarr.splice(1,3);
console.log("Spliced Array: ", myarr2);
console.log("Major difference is Depicted: ", myarr);
// 1--> First Point is End wala gets included in Splice 
// 2--> Original Array se Gayab in Splice 


// ********************* ADVANCED ARRAYS FUNCTIONALITIES *************************

const marvel_heroes=["Thor", "Iron-Man", "Spider-Man"];
const dc_heroes=["Super-Man", "Flash", "Bat-Man"];

console.log(marvel_heroes);
console.log(dc_heroes);

// SEE THE DIFFERENCE BETWEEN PUSH AND CONCAT
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);


// CONCAT ALWAYS RETURNS A NEW ARRAY HENCE STORAGE AND HOLDING PLAYS AN IMPT PART HERE 
const all_heroes=marvel_heroes.concat(dc_heroes);
console.log(all_heroes);
;

// SPREADS THE ARRAYS
const all_new_heroes=[...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7,[3,4,5,[1,2]]];
const real_another_array=another_array.flat(Infinity); // It gives us Depth (Here i kept this infinity)
console.log(real_another_array);

console.log(Array.isArray("PRATEEK"));
console.log(Array.isArray([1,2]));

console.log(Array.from("Prateek"));
console.log(Array.from({name:"Prateek"}));
