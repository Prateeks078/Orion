class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User{

    constructor(username,email,passwd){
        super(username); // Do not create a new object, instead It will call the constructor of parent class 
        //  And It initializes the inherited part of the SAME object.

        this.email=email;
        this.passwd=passwd;
    }

    addCourse(){
        console.log(`This course was added by: ${this.username}`);
    }
}

const T1=new Teacher("Niranjan", "abc@gmail.com", "iou890");
T1.logMe();
T1.addCourse();

const U1=new User("userFirst");
U1.logMe();
// U1.addCourse(); // This will throw me an error ....