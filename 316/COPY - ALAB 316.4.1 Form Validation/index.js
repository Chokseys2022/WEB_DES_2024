// Event Listener for Form Submission
document.getElementById('formRegister').addEventListener('submit', validateRegistrationForm);

// Registration Form Validation
function validateRegistrationForm(event) {
  event.preventDefault();

  const username = document.getElementById('registerInputUsername').value.trim().toLowerCase();
  const email = document.getElementById('registerInputEmail').value.trim().toLowerCase();
  const password = document.getElementById('registerInputPassword').value;
  const confirmPassword = document.getElementById('registerInputConfirmPassword').value;
  const termsCheckbox = document.getElementById('registerTermsCheckbox').checked;

  // Error handling
  if (!username || !email || !password || !confirmPassword) {
    alert('Please fill out all fields.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  if (!termsCheckbox) {
    alert('You must agree to the Terms of Use.');
    return;
  }

  // Check if username is already taken
  if (isUsernameTaken(username)) {
    alert('That username is already taken.');
    return;
  }

  // Store user data in localStorage
  const user = { username, email, password };
  storeUserData(user);

  // Clear form fields
  clearFormFields();

  // Success message
  alert('Registration successful!');
}

// Check if username is already taken
function isUsernameTaken(username) {
  const users = getStoredUsers();
  return users.some(user => user.username === username);
}

// Get all stored users from localStorage
function getStoredUsers() {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
}

// Store user data in localStorage
function storeUserData(user) {
  const users = getStoredUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

// Clear form fields after successful submission
function clearFormFields() {
  document.getElementById('registerInputUsername').value = '';
  document.getElementById('registerInputEmail').value = '';
  document.getElementById('registerInputPassword').value = '';
  document.getElementById('registerInputConfirmPassword').value = '';
  document.getElementById('registerTermsCheckbox').checked = false;
}
console.log(localStorage);
console.log(localStorage.getItem('users'));

