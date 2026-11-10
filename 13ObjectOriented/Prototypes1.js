function multipleby5(num){
    return num*5;
}

multipleby5.power=2;


console.log(multipleby5(6));
console.log(multipleby5.power);
console.log(multipleby5.prototype); // This means that Even function is an Object in Jscript 


// -----------------------------------------------------------------------------------

function createUser(username,score){
    this.username=username;
    this.score=score;
}

// We are implementing below syntax 
createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe=function(){
    console.log(`Score is ${this.score}`);
}

const u1=new createUser("Bholu",23);
const u2=new createUser("Dholu",54);


u1.increment();
u2.increment();

u1.printMe();
u2.printMe();