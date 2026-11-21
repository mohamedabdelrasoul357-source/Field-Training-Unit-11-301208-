import { isRequired, isValidEmail } from './utils.js';
import { showFormFeedback, clearFormFeedback } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form-container form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const feedbackEl = document.getElementById('form-feedback');

  if (!form || !nameInput || !emailInput || !messageInput) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearFormFeedback(feedbackEl);

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;

    if (!isRequired(nameValue)) {
      showFormFeedback(feedbackEl, 'Please enter your name.', 'error');
      nameInput.focus();
      return;
    }

    if (!isRequired(emailValue)) {
      showFormFeedback(feedbackEl, 'Please enter your email address.', 'error');
      emailInput.focus();
      return;
    }

    if (!isValidEmail(emailValue)) {
      showFormFeedback(feedbackEl, 'Please enter a valid email address.', 'error');
      emailInput.focus();
      return;
    }

    if (!isRequired(messageValue)) {
      showFormFeedback(feedbackEl, 'Please write your message.', 'error');
      messageInput.focus();
      return;
    }

    showFormFeedback(feedbackEl, 'Thank you! Your message has been sent.', 'success');
    form.reset();
  });
});