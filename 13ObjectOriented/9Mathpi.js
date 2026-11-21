console.log(Math.PI);
Math.PI=5;
console.log(Math.PI);
// Value will remain same but why?? ---_> Important Question to be asked in interviews !!

const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor); // U will be noticing some great and fine things over there 

// -----------------------------------------------------------------------------------------------

const user = {
    name: "Prateek",
    nickname:"chiku",
    age:12,
    orderChai:function(){
        console.log("Chai nahi banegi bhai !!")
    }
};

// it is taking away three parameters over here, keep into ur mind always 
Object.defineProperty(user, "age", {
    value: 26,
    writable: false,
    enumerable: true,
    configurable: false
});

user.age = 30;
console.log(user.age); // 26

console.log((Object.getOwnPropertyDescriptor(user,"age")));


// Some more playing 
for (let [key,value] of Object.entries(user)) {
    if(typeof(value)!=="function"){
        console.log(`${key}:${value}`); // If u will do age as not enumerable, then yha print nahi hogi woh property get it inside ur head 
    }
}