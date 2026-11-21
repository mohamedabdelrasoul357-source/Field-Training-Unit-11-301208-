
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