// main.js file
// Ui.js File 
import { initMobileMenu } from "./ui.js";

document.addEventListener("DoMContentLoaded", function () {

initMobileMenu();
let buttons = document.querySelectorAll(".filter-btn");
let items = document.querySelectorAll(".menu-item");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let category = button.dataset.category;

        buttons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        items.forEach(function(item) {

            if (category == "all" || item.dataset.category == category) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }

        });

    });

});
})