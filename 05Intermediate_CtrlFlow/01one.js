// Please Do not use var as it operates globally and it can be accessed outside the block

const score=110;
if(score>100){
    var x="Prateek";
    console.log(x);
}
console.log(x); // I should not be able to access X man 
