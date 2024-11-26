function checkPassword() {
  // Define the correct password
  const correctPassword = "q9&)k@kd17"; 

  const enteredPassword = document.getElementById("password").value.trim();

  // Check if the password field is empty
  if (!enteredPassword) {
    alert("Please enter a password.");
    return;  // Exit function if the password is empty
  }

  // If the password matches, display the secret content
  if (enteredPassword === correctPassword) {
    // Hide the welcome text and access instructions
    document.getElementById("welcome-text").style.display = "none";
    document.getElementById("access-text").style.display = "none";

    document.getElementById("login-section").style.display = "none";

    // Reveal the secret content
    const secretContent = document.getElementById("secret-content");
    secretContent.classList.remove("hidden");
  } else {
    // Show an alert if the password is incorrect
    alert("Incorrect password. Please try again.");
  }
}
//q9&)k@kd17 is password
