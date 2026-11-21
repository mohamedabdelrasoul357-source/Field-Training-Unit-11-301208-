// Ui.js File 

export function initGallery() {

    const galleryImages = document.querySelectorAll(".gallery-img");

    const lightbox = document.querySelector("#lightbox-modal");

    const lightboxImage = document.querySelector("#lightbox-img");

    const closeButton = document.querySelector("#lightbox-close");

    // Open Lightbox
    galleryImages.forEach(function(image) {

        image.addEventListener("click", function() {

            lightboxImage.src = image.src;

            lightbox.classList.add("active");

        });

    });

    // Close Button
    closeButton.addEventListener("click", function() {

        lightbox.classList.remove("active");

    });

    // Close when clicking outside image
    lightbox.addEventListener("click", function(event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

    // Close with Escape
    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {

            lightbox.classList.remove("active");

        }

    });

}
