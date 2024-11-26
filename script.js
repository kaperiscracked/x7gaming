function checkPassword() {
  // Define the correct password
  const correctPassword = "q9&)k@kd17";

  // Get the entered password
  const enteredPassword = document.getElementById("password").value;

  // Check if the entered password matches the correct password
  if (enteredPassword === correctPassword) {
    // Hide the welcome text and access instructions
    document.getElementById("welcome-text").style.display = "none";
    document.getElementById("access-text").style.display = "none";

    // Hide the login section (input field and submit button)
    document.getElementById("login-section").style.display = "none";

    // Show the secret content
    document.getElementById("secret-content").classList.remove("hidden");
  } else {
    alert("Incorrect password. Please try again.");
  }
}

// q9&)k@kd17 IS PASSWORD DO NOT FORGET
