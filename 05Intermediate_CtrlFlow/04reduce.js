// -------------------------- Using Reduce Functionalities ------------------------------------------------
const myNums=[1,2,3,4,5];

// Using Reduce in a very Naive Manner
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`The value of acc is: ${acc} & The value of Cum is: ${currval}`);
    return acc+currval;
},0)

console.log(myTotal);

// -------------------------- Using Reduce Functionalities in a very Smart Manner --------------------------

const myTotal2=myNums.reduce((acc,currval)=>acc+currval,0);
console.log(myTotal2);


// --------------------------------- Mini Shopping cart ----------------------------------------------------

const ShoppingCart=[
    {
        itemName:"JS Course",
        itemPrice:1000
    },
    {
        itemName:"CPP Course",
        itemPrice:1300
    },
    {
        itemName:"Python Course",
        itemPrice:3456
    },
    {
        itemName:"Django Course",
        itemPrice:9092
    }
]

// Task is to Use reduce here in a very SharP Manner 
const myTotalBill=ShoppingCart.reduce((acc,currval)=>acc+currval.itemPrice,0);
console.log(myTotalBill);