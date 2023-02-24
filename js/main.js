
let myButton = document.querySelector(".meny_knapp")
let nav = document.querySelector("nav")

let lager = document.querySelector(".lager")
lager.addEventListener("click", displayMenu)
myButton.addEventListener("click", displayMenu)
function displayMenu(){
    nav.classList.toggle("nav_transition");
    lager.classList.toggle("lager_show");
};