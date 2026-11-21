
export function isRequired(value) {
  return typeof value === 'string' && value.trim().length > 0;
}
export function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const trimmedEmail = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(trimmedEmail);
}