// Event Listeners for Form Submission
document.getElementById('formRegister').addEventListener('submit', validateRegistrationForm);
document.getElementById('formLogin').addEventListener('submit', validateLoginForm);

// Registration Form Validation
function validateRegistrationForm(event) {
  event.preventDefault();

  const username = document.getElementById('registerInputUsername').value.trim();
  const email = document.getElementById('registerInputEmail').value.trim();
  const password = document.getElementById('registerInputPassword').value;
  const confirmPassword = document.getElementById('registerInputConfirmPassword').value;
  const termsCheckbox = document.getElementById('registerTermsCheckbox').checked;

  // Clear previous error messages
  clearErrorMessages();

  let isValid = true;

  // Check for empty fields
  if (!username || !email || !password || !confirmPassword) {
    showErrorMessage('All fields are required.', 'registerFormErrors');
    isValid = false;
  }

  // Email validation
  if (!validateEmail(email)) {
    showErrorMessage('Please enter a valid email address.', 'registerInputEmailError');
    isValid = false;
  }

  // Password strength validation
  if (!validatePassword(password)) {
    showErrorMessage('Password must be at least 8 characters, contain one number and one special character.', 'registerInputPasswordError');
    isValid = false;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    showErrorMessage('Passwords do not match.', 'registerInputConfirmPasswordError');
    isValid = false;
  }

  // Check if terms are checked
  if (!termsCheckbox) {
    showErrorMessage('You must agree to the Terms of Use.', 'registerTermsCheckboxError');
    isValid = false;
  }

  if (isValid) {
    alert('Registration successful!');
  }
}

// Login Form Validation
function validateLoginForm(event) {
  event.preventDefault();

  const username = document.getElementById('loginInputUsername').value.trim();
  const password = document.getElementById('loginInputPassword').value;

  // Clear previous error messages
  clearErrorMessages();

  if (!username || !password) {
    showErrorMessage('Please enter your username and password.', 'loginFormErrors');
    return;
  }

  alert('Login successful!');
}

// Email Validation (simple regex)
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Password Validation (minimum 8 chars, at least one special character, one number)
function validatePassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

// Show error message under the input field
function showErrorMessage(message, id) {
  const errorElement = document.getElementById(id);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.color = 'red';
  }
}

// Clear all error messages
function clearErrorMessages() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(message => message.textContent = '');
}
