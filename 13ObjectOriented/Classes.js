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



// -----------------------------------------------------------------------------

function User(username,scholar_no,mother_name,father_name){
    this.username=username;
    this.scholar_no=scholar_no;
    this.mother_name=mother_name;
    this.father_name=father_name;
}

const UserOne=User("chiku",4567,"Mrs. Atkinson", "Mr. Atkinson");
const UserTwo=User("chiku2",7890,"Mrs Albert", "Mr. Albert");

