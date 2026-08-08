const date=new Date();

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")

let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString());

// ----------------------------Time-----------------------------

let samay=Date.now();// Gives time in MilliSeconds 
console.log(samay);

// Convert in sec 
console.log(Math.floor(Date.now()/1000))



let newDate=new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);