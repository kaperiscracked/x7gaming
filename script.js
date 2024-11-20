function checkPassword() {
  const password = document.getElementById("password").value;
  const secretContent = document.getElementById("secret-content");
  const loginSection = document.getElementById("login-section");

  // q9&)k@kd17 IS PASSWORD DO NOT FORGET
  if (password === "q9&)k@kd17") {
    loginSection.style.display = "none";
    secretContent.classList.remove("hidden");
  } else {
    alert("Incorrect password. Please try again.");
  }
}
