import { resetPassword } from "./api.js";

document.getElementById("resetPasswordForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const response = await resetPassword({ password });
    alert("Password reset successful!");
    window.location.href = "/templates/signin.html"; // Redirect to login page
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});
