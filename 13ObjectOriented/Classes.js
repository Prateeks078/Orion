const user={
    username:"Prateek Sharma",
    scholar_no:5078,
    contact_num:9413458229,
    mother_name:"Meena",
    father_name:"Rajesh",
    getUserName:function(){
        // console.log(username); This will throw us an error 
        console.log(this.username);
        console.log(this); // This will give us the value of current context 
    }
}

console.log(user.username);
console.log(user.father_name);

console.log(user.getUserName());
console.log(this);



// ------------------------------------- Importance of NEW Keyword ----------------------------------------

function User(username,scholar_no,mother_name,father_name){
    this.username=username;
    this.scholar_no=scholar_no;
    this.mother_name=mother_name;
    this.father_name=father_name;

    // return this; // Returning is optional but it's a good practice 
}

const UserOne=new User("chiku",4567,"Mrs. Atkinson", "Mr. Atkinson");
const UserTwo=new User("chiku2",7890,"Mrs Albert", "Mr. Albert");
// new keyword gives us a complete new instance everytime 
// hadnt it be there then we would have got same chiku2 even if i would have printed UserOne 

console.log(UserOne);
console.log(UserTwo);