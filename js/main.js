
let myButton = document.querySelector(".meny_knapp")

let nav = document.querySelector("nav")

let lager = document.querySelector(".lager")

lager.addEventListener("click", displayMenu)

myButton.addEventListener("click", displayMenu)








function displayMenu(){

    nav.classList.toggle("nav_transition");
   
    lager.classList.toggle("lager_show");
};


let mindre = document.querySelector(".visa_mindre")


mindre.addEventListener("click", visaMindre)



function visaMindre(){

    if (mindre.innerHTML === "Visa mer"){
        mindre.innerHTML = "Visa mindre"


    }else{
        mindre.innerHTML = "Visa mer"

    }




};
