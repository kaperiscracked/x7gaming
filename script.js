function checkPassword() {
  // Define the correct password
  const correctPassword = "q9&)k@kd17"; 

  const enteredPassword = document.getElementById("password").value;

  if (enteredPassword === correctPassword) {
    // Hide the welcome text and access instructions
    document.getElementById("welcome-text").style.display = "none";
    document.getElementById("access-text").style.display = "none";

    document.getElementById("login-section").style.display = "none";

    document.getElementById("secret-content").classList.remove("hidden");
  } else {
    alert("Incorrect password. Please try again.");
  }
}

// q9&)k@kd17 IS PASSWORD DO NOT FORGET
