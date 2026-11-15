// Writing Code with the help of Classes in JS

// class User{
    
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPass(password){
//         console.log(`${this.password}1243`);
//     }

//     changeUsername(username){
//         console.log(this.username.toUpperCase());
//     }
// }

// const u1=new User("chiku","chiku@gmail.com","chy");

// u1.encryptPass();
// u1.changeUsername();


// -------------------------Behind the scenic code without this stuff -------------------

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPass=function(){
    console.log(`${this.password}1243`);
}

User.prototype.changeUsername=function(){
    console.log(this.username.toUpperCase());
}

const u2=new User("Tipu","tipu@gmail.com", "ui89");
u2.encryptPass();
u2.changeUsername();