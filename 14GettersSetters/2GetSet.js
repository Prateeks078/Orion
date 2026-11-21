const User={
        _email:"abc@gmail.com",
        _password:"ertyuio",

    set passwd(value){
        this._password=value;
    },
    
    get passwd(){
        return `${this._password.toUpperCase()}`;
    }
}

console.log(User.passwd); // So basically getters and setters ke aate hi Javascript is not treating it as 
// functions instead it is treating them as properties that's why if u observed we didnt put bracket over there 
// 