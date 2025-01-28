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

  alert('Registration successful!');
  // Further processing can be added here
}

// Login Form Validation
function validateLoginForm(event) {
  event.preventDefault();

  const username = document.getElementById('loginInputUsername').value.trim();
  const password = document.getElementById('loginInputPassword').value;

  if (!username || !password) {
    alert('Please enter your username and password.');
    return;
  }

  alert('Login successful!');
  // Further processing can be added here
}
