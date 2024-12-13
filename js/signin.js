import { loginUser } from "./api.js";

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await loginUser({ email, password });
    alert("Login successful!");
    localStorage.setItem("jwtToken", response.token); // Save token for authenticated requests
    window.location.href = "/templates/home.html"; // Redirect to home page
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});
