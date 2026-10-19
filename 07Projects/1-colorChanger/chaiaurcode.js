console.log("Prateek is On");

const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");
console.log(buttons);

// Because it was a Node-List, so we will be using ForEach
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e); // Notice the console and get the ideaa
        console.log(e.target); // See the console and get the idea 

        if(e.target.id=='grey'){
            body.style.backgroundColor=e.target.id;
        }

        if(e.target.id=='white'){
            body.style.backgroundColor=e.target.id;
        }

        if(e.target.id=='blue'){
            body.style.backgroundColor=e.target.id;
        }

        if(e.target.id=='yellow'){
            body.style.backgroundColor=e.target
        }

    })
})