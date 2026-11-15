class Animal{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`This user is in: ${this.username}`);
    }

    // Static means the method or property belongs to the class itself, 
    // rather than individual instances (objects).
    static createID(){
        return `123`;
    }
}

class Dog extends Animal{
    constructor(username,email){
        super(username);

        this.email=email;
    }
}


const iphone1= new Animal("Iphone");
const iphoneDuo=new Dog("IponeDuo", "i@phone.com");

iphone1.logMe();
iphoneDuo.logMe();
// console.log(iphoneDuo.createID()); // This will give error because this is also an instance that we created not class
// console.log(iphone1.createID());

console.log(Animal.createID()); // These both will run means any inherited class will also get the access of static methods 
console.log(Dog.createID());