// Orignal code:
// // index.js
const registration = document.getElementById("registration");
const name = registration.elements["name"];
const email = registration.elements["email"];
const password = registration.elements["password"];
const repeatPassword = registration.elements["repeatPassword"];

// Add an event listener for form submission
registration.addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Perform form validation
  const isValid = validateRegistrationForm();

  // If the form is valid, you can proceed with submitting the form or performing other actions
  if (isValid) {
    // Perform any action you want when the form is valid
    alert("Form submitted successfully!");
  }
});

// Function to validate registration form
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
function validateEmail(emailValue) {
  // Check if the email is not blank
  if (!emailValue) {
    return "The email cannot be blank.";
  }
  // Check if the email is a valid email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    return "Invalid email address.";
  }

  // Check if the email is not from the domain "example.com"
  if (emailValue.toLowerCase().endsWith("@example.com")) {
    return "Email cannot be from the domain example.com.";
  }

  // If all checks pass, the email is valid
  return "Email is valid!";
}
// console.log(validateUsername(name)); // Should print "Username is valid!"
// console.log(validateEmail(email)); // Should print "Email is valid!"
// console.log(validateUsername(username2)); // Should print "The username must be at least four characters long."
// console.log(validateUsername(username3)); // Should print "The username cannot contain any special characters or whitespace."

// Function to validate passwords
function validatePassword(passwordValue) {
  // Check if the password is not blank
  if (!passwordValue) {
    return "The password cannot be blank.";
  }

  // Check if the password is at least 12 characters long
  if (passwordValue.length < 12) {
    return "The password must be at least 12 characters long.";
  }

  // Check if the password has at least one uppercase and one lowercase letter
  if (!/[a-z]/.test(passwordValue) || !/[A-Z]/.test(passwordValue)) {
    return "The password must have at least one uppercase and one lowercase letter.";
  }
  // Check if the password contains at least one number
  if (!/\d/.test(passwordValue)) {
    return "The password must contain at least one number.";
  }

  // Check if the password contains at least one special character
  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(passwordValue)) {
    return "The password must contain at least one special character.";
  }
  if (passwordValue.toLowerCase().includes("password")) {
    return "Password cannot contain the word 'password'.";
  }

  // Check if the password is the same as the repeated password
  if (passwordValue !== repeatPasswordValue) {
    return "Passwords do not match.";
  }

  // Check if the password contains the username
  if (passwordValue.toLowerCase().includes(username.toLowerCase())) {
    return "Password cannot contain the username.";
  }
  // Additional password strength checks can be added if needed

  // If all checks pass, the password is valid
  return "Password is valid!";
}

//******************* */ Function to validate repeated passwords
// function validateRepeatPassword(repeatPasswordValue) {
//   // Check if the repeated password is not blank
//   if (!repeatPasswordValue) {
//     return "The repeated password cannot be blank.";
//   }
// }

// Function to validate terms and conditions acceptance
function validateTermsAndConditions(termsAccepted) {
  // Check if the terms and conditions are accepted
  if (!termsAccepted) {
    return "Terms and conditions must be accepted.";
  }

  // If terms are accepted, return success message
  return "Terms and conditions accepted!";
}

// Function to validate login form username
function validateLoginFormUsername(username) {
  // Check if the username is not blank
  if (!username) {
    return "The username cannot be blank.";
  }

  // Additional login form username checks can be added if needed

  // If all checks pass, the username is valid
  return "Login form username is valid!";
}
// Function to validate login form
function validateLoginForm() {
  // Perform any login form validation you need
  // For example, you can check if the loginUsername and loginPassword are not blank

  // Validate login password
  const passwordValidationResult = validatePassword(loginPassword.value);

  // If the password is valid, return true for the login form to be considered valid
  if (passwordValidationResult === "Password is valid!") {
    return true;
  } else {
    // If the password is not valid, display an alert or handle it in your preferred way
    alert(passwordValidationResult);
    return false;
  }
}
