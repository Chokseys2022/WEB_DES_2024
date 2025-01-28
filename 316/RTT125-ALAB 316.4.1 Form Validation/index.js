document.addEventListener("DOMContentLoaded", function () {
    // Registration Form Validation
    const registrationForm = document.getElementById("registration");
    registrationForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents the form from submitting by default
  
      // Reset error display
      document.getElementById("errorDisplay").innerHTML = "";
  
      // Validation functions
      const showError = (message, inputElement) => {
        document.getElementById("errorDisplay").innerHTML = message;
        inputElement.focus();
      };
  
      const isUsernameValid = (username) => {
        // Implement username validation rules
        // ...
  
        // Return true if the username is valid, false otherwise
        return true;
      };
  
      const isEmailValid = (email) => {
        // Implement email validation rules
        // ...
  
        // Return true if the email is valid, false otherwise
        return true;
      };
  
      const isPasswordValid = (password, passwordCheck) => {
        // Implement password validation rules
        // ...
  
        // Return true if passwords are valid, false otherwise
        return true;
      };
  
      const isTermsAccepted = () => {
        return registrationForm.elements["terms"].checked;
      };
  
      // Get form values
      const username = registrationForm.elements["username"].value.toLowerCase();
      const email = registrationForm.elements["email"].value.toLowerCase();
      const password = registrationForm.elements["password"].value;
      const passwordCheck = registrationForm.elements["passwordCheck"].value;
  
      // Validate username
      if (!isUsernameValid(username)) {
        showError("Invalid username.", registrationForm.elements["username"]);
        return;
      }
  
      // Validate email
      if (!isEmailValid(email)) {
        showError("Invalid email.", registrationForm.elements["email"]);
        return;
      }
  
      // Validate password
      if (!isPasswordValid(password, passwordCheck)) {
        showError("Invalid password.", registrationForm.elements["password"]);
        return;
      }
  
      // Validate terms acceptance
      if (!isTermsAccepted()) {
        showError("Please accept the terms and conditions.", registrationForm.elements["terms"]);
        return;
      }
  
      // Store user data in localStorage
      const userData = { username, email, password };
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const isUsernameTaken = existingUsers.some(user => user.username === username);
      if (isUsernameTaken) {
        showError("That username is already taken.", registrationForm.elements["username"]);
        return;
      }
  
      existingUsers.push(userData);
      localStorage.setItem("users", JSON.stringify(existingUsers));
  
      // Clear form fields
      registrationForm.reset();
  
      // Display success message
      document.getElementById("errorDisplay").innerHTML = "Registration successful!";
    });
  
    // Login Form Validation
    const loginForm = document.getElementById("login");
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents the form from submitting by default
  
      // Reset error display
      document.getElementById("errorDisplay").innerHTML = "";
  
      // Get form values
      const loginUsername = loginForm.elements["username"].value.toLowerCase();
      const loginPassword = loginForm.elements["password"].value;
  
      // Retrieve users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
      // Validate username existence
      const userExists = existingUsers.some(user => user.username === loginUsername);
      if (!userExists) {
        showError("Username not found.", loginForm.elements["username"]);
        return;
      }
  
      // Validate password
      const user = existingUsers.find(user => user.username === loginUsername);
      if (user.password !== loginPassword) {
        showError("Incorrect password.", loginForm.elements["password"]);
        return;
      }
  
      // Clear form fields
      loginForm.reset();
  
      // Display success message with "Keep me logged in" information
      const successMessage = user.persist ? "Login successful (You are kept logged in)." : "Login successful.";
      document.getElementById("errorDisplay").innerHTML = successMessage;
    });
  });
  