export function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  
  if (navLinks && menuToggle) {
    navLinks.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
    });
  }
}

export function showFormFeedback(feedbackElement, message, type = 'error') {
  if (!feedbackElement) return;

  feedbackElement.textContent = message;
  feedbackElement.classList.remove('error', 'success');

  if (type === 'error' || type === 'success') {
    feedbackElement.classList.add(type);
  }
}

export function clearFormFeedback(feedbackElement) {
  if (!feedbackElement) return;

  feedbackElement.textContent = '';
  feedbackElement.classList.remove('error', 'success');
}

export function initGallery() {
  const galleryImages = document.querySelectorAll(".gallery-img");
  const lightbox = document.querySelector("#lightbox-modal");
  const lightboxImage = document.querySelector("#lightbox-img");
  const closeButton = document.querySelector("#lightbox-close");

  if (!lightbox) return;

  galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
      if (lightboxImage) lightboxImage.src = image.src;
      lightbox.classList.add("active");
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      lightbox.classList.remove("active");
    });
  }

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      lightbox.classList.remove("active");
    }
  });
}