const clock=document.querySelector('#clock');

// let date=new Date();
// console.log(date.toLocaleDateString()); --> Print Date
// console.log(date.toLocaleTimeString()); --> Print Time 

// but i want this to happen concurrently, & i do not want any cron jobs and all, just to apply
// simple and sober things to happen 

// Using SetInterval Function

setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000)