import React, { useState } from "react";
import axios from "axios";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      if (!isLogin) {
        // Register logic
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match.");
          return;
        }

        const { data } = await axios.post("/api/users/register", {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });

        setMessage(data.message);
      } else {
        // Login logic
        const { data } = await axios.post("/api/users/login", {
          email: formData.email,
          password: formData.password,
        });

        setMessage("Login successful!");
        localStorage.setItem("token", data.token); // Store token for session management
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="auth-page">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleFormSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <button
        className="toggle-button"
        onClick={() => setIsLogin((prev) => !prev)}
      >
        {isLogin ? "Create an Account" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default AuthPage;
