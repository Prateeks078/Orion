class User{
    constructor(email,passwd){
        this.email=email;
        this.password=passwd;
    }

    set password(passwd){
        this._password=passwd;
    }

    get password(){
        return `${this._password.toUpperCase()}`;
    }
    // to prevent race between getters-setters and constructors we have used this ___ over here, keep into ur mind 
}

const u1=new User("chai@gmail.com", "ert");
console.log(u1.password); 