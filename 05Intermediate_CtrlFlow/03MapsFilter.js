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


// -----------------------------------------  Using Filters -------------------------------------------
const myNums=[1,2,3,4,5,6,7,8,9,10];

const newNums=myNums.filter((item)=>{
    return item>5;
})
console.log(newNums);

const newNums2=myNums.filter((item)=>item>6)
console.log(newNums2);

