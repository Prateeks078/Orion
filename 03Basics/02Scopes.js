function one(){
    const username="Prateek";

    function two(){
        const website="You-Tube";
        console.log(username);
    }
    // console.log(website); // This will give error na, scope m nahi h --> Ice-Cream Examplee 
    two();
}
one();


// ------------------------ ** Testing Another Example ** ----------------------------

if(true)
{
    const username="Prateek";

    if(username=="Prateek"){
        const website="Instagram";
        console.log(username); // This is in the scope 
    }

    // console.log(website); // This is also out of the scope 
}
// console.log(username); // This is out of the Scope 





// --------------------------- *** TWO WAYS OF WRITING A FUNCTION *** ------------------------------

function addone(num){
    return num+1;
}

// Expressions are very powerful is JS, They can store anything 
const beta=function addtwo(num){
    return num+2;
}

// Aliter Way 
const alpha=function(num){
    return num+2;
}

console.log(addone(4));
console.log(alpha(9));
console.log(beta(10));
