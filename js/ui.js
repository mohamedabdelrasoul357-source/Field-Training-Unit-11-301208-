export function initMobileMenu() {

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  navLinks.addEventListener("click", function () {

    menuToggle.classList.toggle("active");

  });

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