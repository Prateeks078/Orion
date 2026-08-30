// Loops Introduction
for(let ind=0;ind<10;ind++){
    console.log(ind);
}

const myarray=["Iron Man", "Thor", "Hulk", "Wonder Women"];
for(let i=0;i<myarray.length;i++){
    console.log(myarray[i]);
}

// Usage of Break
for(let i=0;i<myarray.length;i++){
    if(myarray[i]=="Green Hulk")
        break;
    console.log(myarray[i]);
}

// Usage of Continue --> Ek baar maaf krdo (skip krdo bs)
for(let i=0;i<10;i++){
    if(i==8)
        continue;
    console.log(i);
}

// While Loops
let ind=0;
while(ind<myarray.length){
    console.log(`The name of the superhero is: ${myarray[ind]}`);
    ind++;
}

// Do while loop
let x=0;
do{
    console.log(`My Super Hero is: ${myarray[x]}`);
    x++;
}while(x<myarray.length)



// ---------------------------------- HIGHER ORDER ARRAY LOOPS ---------------------------------------------

const numbers=[1,2,3,4,5,6,7,8];
// Using For Of Looping 
for(const num of numbers){
    console.log(num);
}

const greetings="Hello World"
for(const greeet of greetings){
    console.log(greeet);
}

// ---------------------------------- USING MAPS FUNCTIONALITY ---------------------------------------------

const map=new Map();
map.set('IN', "India");
map.set('USA', "Unisted States Of America");
map.set('Fr', "France");

console.log(map);

/// Iterating with the help of for of loop 

for(const [key,value] of map){
    console.log(key,'-->', value);
}


// ---------------------------------- USING FOR-IN LOOPING FUNCTIONALITY ---------------------------------------------

//  PROBLEM-STATEMENT
// TRY TO TRAVERSE THE OBJECTS WITH THE HELP OF FOR-LOOPS

const myobj={
    js:"Java-Script",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift By Apple"
}

// Will try to traverse with the help of FOR-OF Looping

// for(const iterator of myobj){
//     console.log(iterator);
//}

// ----> Will be giving myObj is not iterable Error 

// FOR-IN Looping comes into the Picture 
for(const key in myobj){
    console.log(`The key for the Object is ${key} and the value of this particular key is: ${myobj[key]}`);
}

// FOR-IN lOOPING WILL PLAY ITS PART IN ONLY INTERABLE THINGS (WON'T BE APPLICABLE IN CASE OF MAPS)
const arr=["harry", "ron", "hermione"];
for(const itr in arr){
    console.log(itr);
    console.log(arr[itr]);
}



// ---------------------------------------- FOR EACH LOOPING ---------------------------------------
const Heroes=["Batman","Superman","Hanuman", "Captain-America"];

// Normal Function Call
Heroes.forEach(function(itr){
    console.log(itr);
})

// Using Arrow Functions
Heroes.forEach((itr)=>{
    console.log(itr);
})

// Function is written smwhere else and I wanna use it..
function Printme(item){
    console.log(`Hey, Please Print the ${item}`);
}


Heroes.forEach(Printme);

// Miscellanious Aliter to Find Our Own Way
Heroes.forEach((item, ind, arr)=>{
    console.log(item,ind,arr);
});


// ---------------------------------------- USING THESE KNOWLEDGE FOR FETCHING THE DATA FROM DB -----------
const languages=[
    {
        languageName:"Hindi",
        languageAuthor:"Maithli"
    },
    {
        languageName:"Urdu",
        languageAuthor:"ABC"
    },
    {
        languageName:"Punjabi",
        languageAuthor:"XYZ"
    }
]

languages.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.languageAuthor);
})