const user={
    username:"Prateek",
    price:999,
    
    welcomeMesage:function(){
        console.log(`${this.username}, welcome to my world`);
    }
}

user.welcomeMesage();
user.username="Tinku";
user.welcomeMesage();