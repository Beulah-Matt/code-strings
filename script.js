const h2 = document.createElement("h2");
h2.textContent = "What makes me tick";
document.querySelector("body").appendChild(h2);


document.getElementById("h2").innerHTML= "I am a developer who first began as a hobbyist before finding my way to Moringa. I love creating and seeing ideas come to life. When I am not working, I will be chasing mountains and going to an orchestra perfomance near me.";

debugger;

//When button is clicked
const button= document.getElementsByClassName("play-button")

function addingEventListener() {
   button.addEventListener('click',clickAlert) 
}
function clickAlert(){
    
alert('I was clicked');  
}    
