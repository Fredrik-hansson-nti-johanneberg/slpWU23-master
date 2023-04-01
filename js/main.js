
let myButton = document.querySelector(".meny_knapp");

let nav = document.querySelector("nav");

let lager = document.querySelector(".lager");


lager.addEventListener("click", displayMenu);

myButton.addEventListener("click", displayMenu);



function displayMenu(){

    nav.classList.toggle("nav_transition");
   
    lager.classList.toggle("lager_show");
};


let mer = document.querySelector("#visa_mer");

let visa_inte = document.querySelectorAll(".visa_inte");


mer.addEventListener("click", visaMer);



function visaMer(){


    visa_inte.forEach(visa_inte => {
        visa_inte.classList.toggle("visa");
    });

    if (mer.innerHTML === "Visa mer"){
        mer.innerHTML = "Visa mindre";
    }else{
        mer.innerHTML = "Visa mer";
    };

};
