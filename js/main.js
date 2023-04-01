







let myButton = document.querySelector(".meny_knapp");

let nav = document.querySelector("nav");

let lager = document.querySelector(".lager");


lager.addEventListener("click", displayMenu);

myButton.addEventListener("click", displayMenu);



function displayMenu(){

    nav.classList.toggle("nav_transition");
   
    lager.classList.toggle("lager_show");
};



let fanfar_ljud = 0


if (document.querySelector(".fanfar")){
    fanfar_ljud = document.querySelector(".fanfar");
}

toggle_ljud()

window.addEventListener("resize", toggle_ljud);


function toggle_ljud(){
    if (window.innerWidth > 600){
        fanfar_ljud.volume = 1;
    } else{
        fanfar_ljud.volume = 0;

    }

};






let mer = document.querySelector("#visa_mer");

let visa_inte = document.querySelectorAll(".visa_inte");

if (document.querySelector("#visa_mer")){
    mer.addEventListener("click", visaMer);
}





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



