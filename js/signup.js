import { registerUser } from "./api.js";

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await registerUser({ email, password });
    alert("Registration successful!");
    window.location.href = "/templates/signin.html"; // Redirect to login page
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});

function togglePassword(fieldId) {
  const passwordField = document.getElementById(fieldId);
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
}

// Make the function globally accessible
window.togglePassword = togglePassword;
