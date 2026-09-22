const coding=["Cpp", "Javascript", "C", "Ruby"];

// Traversing through the Loop 
coding.forEach((item)=>{
    console.log(item);
})

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;// No matter u return or not the console for values will be undefined 
// })
// console.log(values);


// ----------------------------------------- Using Filters in the Code -------------------------------------------
const myNums=[1,2,3,4,5,6,7,8,9,10];

const newNums=myNums.filter((item)=>{
    return item>5;
})
console.log(newNums);

const newNums2=myNums.filter((item)=>item>6)
console.log(newNums2);

// Aliter way is to use ForEach Looping Criteria
const myNums2=[1,2,3,4,5,6,7,8,9,10];
const filteredArr=[];

myNums2.forEach((num)=>{
    if(num>6){
        filteredArr.push(num);
    }
})
console.log(filteredArr);

// ----------------------------------------- Using Maps in the Code -------------------------------------------

const myNumbers=[1,2,3,4,5,6,7,8,9,10];
const newNums1=myNumbers.map((n)=>{return n+101});// 1st way
const newNums3=myNumbers.map((n)=>n+101);// 2nd way
console.log(newNums1);
console.log(newNums3);


// Can be done with foreach as well
const newNums101=[];
myNumbers.forEach((item)=>{
    newNums101.push(item+101);
})
console.log(newNums3);