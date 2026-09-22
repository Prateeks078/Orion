// -------------------------- Using Reduce Functionalities --------------------------
const myNums=[1,2,3,4,5];

// Using Reduce in a very Naive Manner
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`The value of acc is: ${acc} & The value of Cum is: ${currval}`);
    return acc+currval;
},0)

console.log(myTotal);