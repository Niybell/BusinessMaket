"use strict";

let home = document.querySelector(".block1");
let aboutUs = document.querySelector(".block3");
let pricingTable = document.querySelector(".block4");
let howItWork = document.querySelector(".block5");
let happyClients = document.querySelector(".block6");

document.documentElement.addEventListener("click", function(e){
  if (e.target.closest(".home-js")){
    home.scrollIntoView({
      block: "center",
      behavior: "smooth"
    });
  }
  else if (e.target.closest(".about-us-js")){
    aboutUs.scrollIntoView({
      block: "center",
      behavior: "smooth"
    });
  }
  else if (e.target.closest(".price-js")){
    pricingTable.scrollIntoView({
      block: "center",
      behavior: "smooth"
    });
  }
  else if (e.target.closest(".how-js")){
    howItWork.scrollIntoView({
      block: "center",
      behavior: "smooth"
    });
  }
  else if (e.target.closest(".happy-clients-js")){
    happyClients.scrollIntoView({
      block: "center",
      behavior: "smooth"
    });
  }
  e.preventDefault();
})