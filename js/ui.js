// Ui.js File 

export function initMobileMenu() {

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
// console.log(menuToggle.className);


// if(!menuToggle || navLinks){
//     console.log("llllll");
//     return;
    
// }


navLinks.addEventListener("click", function () {

menuToggle.classList.toggle("active");
// console.log(navLinks.classList.contains("active"));


});

}