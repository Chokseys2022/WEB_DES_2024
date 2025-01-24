// Function to display the current date and time
function displayDate() {
    document.getElementById("date").innerHTML = new Date();
  }
  
  // Function to display random text
  function displayRandomText() {
    const randomText = [
      "Hello, world!",
      "How are you today?",
      "JavaScript is fun!",
      "Keep learning new things!",
      "Hovering is awesome!"
    ];
  
    // Select a random text from the array
    const randomIndex = Math.floor(Math.random() * randomText.length);
    document.getElementById("demo").innerHTML = randomText[randomIndex];
  }
  
  // Function to convert input text to lowercase
  function convertToLowercase() {
    const inputBox = document.getElementById("lowercaseInput");
    inputBox.value = inputBox.value.toUpperCase();
  }
  
  // Call the function when the page loads
  window.onload = displayDate;
  