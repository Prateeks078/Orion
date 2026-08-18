function one(){
    const username="Prateek";

    function two(){
        const website="You-Tube";
        console.log(username);
    }
    console.log(website); // This will give error na, scope m nahi h --> Ice-Cream Examplee 
    two();
}
one();