const API_BASE_URL = "http://localhost:8080"; // Replace with your backend URL

/**
 * Registers a new user by sending their data to the backend.
 * @param {Object} userData - User data, including email and password.
 * @returns {Promise<Object>} - Response from the server.
 */
export async function registerUser(userData) {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    console.log(response);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Registration failed");
    }
    
    return await response.json();
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}

/**
 * Logs in a user by sending their credentials to the backend.
 * @param {Object} credentials - User credentials, including email and password.
 * @returns {Promise<Object>} - Response from the server with the JWT token.
 */
export async function loginUser(credentials) {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Login failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export default API_BASE_URL;
