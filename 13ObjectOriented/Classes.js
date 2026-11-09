const user={
    username:"Prateek Sharma",
    scholar_no:5078,
    contact_num:9413458229,
    mother_name:"Meena",
    father_name:"Rajesh",
    getUserName:function(){
        // console.log(username); This will throw us an error 
        console.log(this.username);
    }
}

console.log(user.username);
console.log(user.father_name);

console.log(user.getUserName());