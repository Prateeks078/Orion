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