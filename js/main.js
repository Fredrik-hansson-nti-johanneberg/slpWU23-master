
let myButton = document.querySelector(".meny_knapp")
let nav = document.querySelector("nav")
myButton.addEventListener("click", displayMenu)
function displayMenu(){
    nav.classList.toggle("a");
};