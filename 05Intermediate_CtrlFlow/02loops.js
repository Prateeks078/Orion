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
    if(myarray[i]=="Hulk")
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



// ----------------------------------**** HIGHER ORDER ARRAY LOOPS ****---------------------------------------------

