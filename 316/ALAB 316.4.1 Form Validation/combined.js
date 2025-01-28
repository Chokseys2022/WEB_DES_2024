// index.js

const registration = document.getElementById("registration");
const login = document.getElementById("login");
const errorDisplay = document.getElementById("errorDisplay");

// // Function to validate username
function validateUsername(username) {
  // Check if the username is not blank
  if (!username) {
    return "The username cannot be blank.";
  }

  // Check if the username is at least four characters long
  if (username.length < 4) {
    return "The username must be at least four characters long.";
  }

  // Check if the username contains at least two unique characters
  const uniqueChars = new Set(username);
  if (uniqueChars.size < 2) {
    return "The username must contain at least two unique characters.";
  }

  // Check if the username contains only alphanumeric characters
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    return "The username cannot contain any special characters or whitespace.";
  }

  // If all checks pass, the username is valid
  return "Username is valid!";
}

// Function to validate email
function validateEmail(email) {
  // Check if the email is not blank
  if (!email) {
    return "The email cannot be blank.";
  }

  // Check if the email is a valid email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email address.";
  }

  // Check if the email is not from the domain "example.com"
  if (email.toLowerCase().endsWith("@example.com")) {
    return "Email cannot be from the domain example.com.";
  }

  // If all checks pass, the email is valid
  return "Email is valid!";
}

// Function to validate password
function validatePassword(password, repeatPasswordValue, username) {
  // Check if the password is not blank
  if (!password) {
    return "The password cannot be blank.";
  }

  // Check if the password is at least 12 characters long
  if (password.length < 12) {
    return "The password must be at least 12 characters long.";
  }

  // Check if the password has at least one uppercase and one lowercase letter
  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
    return "The password must have at least one uppercase and one lowercase letter.";
  }

  // Check if the password contains at least one number
  if (!/\d/.test(password)) {
    return "The password must contain at least one number.";
  }

  // Check if the password contains at least one special character
  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
    return "The password must contain at least one special character.";
  }

  // Check if the password is the same as the repeated password
  if (password !== repeatPasswordValue) {
    return "Passwords do not match.";
  }

  // Check if the password contains the username
  if (password.toLowerCase().includes(username.toLowerCase())) {
    return "Password cannot contain the username.";
  }

  // Check if the password contains the word 'password'
  if (password.toLowerCase().includes("password")) {
    return "Password cannot contain the word 'password'.";
  }

  // If all checks pass, the password is valid
  return "Password is valid!";
}

// Function to validate terms and conditions acceptance
function validateTermsAndConditions(termsAccepted) {
  // Check if the terms and conditions are accepted
  if (!termsAccepted) {
    return "Terms and conditions must be accepted.";
  }

  // If terms are accepted, return success message
  return "Terms and conditions accepted!";
}

// Function to show error
function showError(message, inputElement) {
  errorDisplay.innerHTML = message;
  inputElement.focus();
}

// Function to validate registration form
function validateRegistrationForm() {
  const username = registration.elements["username"].value.toLowerCase();
  const email = registration.elements["email"].value.toLowerCase();
  const password = registration.elements["password"].value;
  const repeatPasswordValue = registration.elements["repeatPassword"].value;

  // Validate username
  if (!validateUsername(username)) {
    showError("Invalid username.", registration.elements["username"]);
    return false;
  }

  // Validate email
  if (!validateEmail(email)) {
    showError("Invalid email.", registration.elements["email"]);
    return false;
  }

  // Validate password
  const passwordValidationResult = validatePassword(
    password,
    repeatPasswordValue,
    username
  );
  if (passwordValidationResult !== "Password is valid!") {
    showError(passwordValidationResult, registration.elements["password"]);
    return false;
  }

  // Validate terms acceptance
  if (!validateTermsAndConditions(registration.elements["terms"].checked)) {
    showError(
      "Please accept the terms and conditions.",
      registration.elements["terms"]
    );
    return false;
  }

  return true;
}

// Event listener for registration form submission
registration.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the form from submitting by default

  // Reset error display
  errorDisplay.innerHTML = "";

  // Perform form validation
  const isValid = validateRegistrationForm();

  // If the form is valid, you can proceed with submitting the form or performing other actions
  if (isValid) {
    // Perform any action you want when the form is valid
    alert("Form submitted successfully!");
  }
});

// Function to validate login form
function validateLoginForm() {
  // Perform any login form validation you need
  // For example, you can check if the loginUsername and loginPassword are not blank

  // Function to validate login form username
  function validateLoginFormUsername(username) {
    // Check if the username is not blank
    if (!username) {
      return "The username cannot be blank.";
    }

    // Get form values
    const loginUsername = login.elements["username"].value.toLowerCase();
    const loginPassword = login.elements["password"].value;

    // Retrieve users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Validate username existence
    const userExists = existingUsers.some(
      (user) => user.username === loginUsername
    );
    if (!userExists) {
      showError("Username not found.", login.elements["username"]);
      return false;
    }

    // Validate password
    const user = existingUsers.find((user) => user.username === loginUsername);
    if (user.password !== loginPassword) {
      showError("Incorrect password.", login.elements["password"]);
      return false;
    }

    return true;
  }

  // Event listener for login form submission
  login.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting by default

    // Reset error display
    errorDisplay.innerHTML = "";

    // Perform login form validation
    const isValid = validateLoginForm();

    // If the form is valid, you can proceed with submitting the form or performing other actions
    if (isValid) {
      // Perform any action you want when the form is valid
      alert("Login successful!");
    }
  });
}
