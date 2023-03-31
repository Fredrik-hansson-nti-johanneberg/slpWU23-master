
let myButton = document.querySelector(".meny_knapp");

let nav = document.querySelector("nav");

let lager = document.querySelector(".lager");


lager.addEventListener("click", displayMenu);

myButton.addEventListener("click", displayMenu);



let mer = document.querySelector("#visa_mer");

let inte_visa = document.querySelectorAll(".inte_visa");


mer.addEventListener("click", visaMer);


function displayMenu(){

    nav.classList.toggle("nav_transition");
   
    lager.classList.toggle("lager_show");
};




function visaMer(){


    inte_visa.forEach(inte_visa => {
        inte_visa.classList.toggle("visa_inte");
    });

    if (mer.innerHTML === "Visa mer"){
        mer.innerHTML = "Visa mindre";
    }else{
        mer.innerHTML = "Visa mer";
    };

};
