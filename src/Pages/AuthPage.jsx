import React, { useState } from "react";
import axios from "axios";
// Si vous utilisez react-router-dom, vous pourriez importer useNavigate pour la redirection
// import { useNavigate } from "react-router-dom";

const API_BASE_URL = "/api/users"; // Configuration centralisée pour l'URL de base de l'API

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const initialFormData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const navigate = useNavigate(); // Pour la redirection avec react-router-dom

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      if (!isLogin) {
        // Register logic
        // Validation côté client plus robuste pourrait être ajoutée ici (ex: force du mot de passe)
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
        // Optionnel : basculer vers le mode login après une inscription réussie
        // setIsLogin(true);
        // setFormData(initialFormData); // Réinitialiser le formulaire
        // Ou rediriger l'utilisateur, par exemple : navigate('/login-success');
      } else {
        // Login logic
        const { data } = await axios.post("/api/users/login", {
          email: formData.email,
          password: formData.password,
        });
        setMessage("Login successful!");
        localStorage.setItem("token", data.token); // Store token for session management
        // Rediriger l'utilisateur après une connexion réussie
        // Par exemple: navigate('/dashboard');
        // Pour l'instant, on peut juste réinitialiser le formulaire pour la démo
        // setFormData(initialFormData);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    // Réinitialiser le formulaire et les messages lors du changement de mode
    setFormData(initialFormData);
    setMessage("");
    setError("");
  };

  return (
    <div className="auth-page">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      {loading && <div className="loading-message">Loading...</div>}
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
              required={!isLogin} // Requis seulement pour l'inscription
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
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : isLogin ? "Login" : "Register"}
        </button>
      </form>
      <button className="toggle-button" onClick={toggleMode} disabled={loading}>
        {isLogin ? "Create an Account" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default AuthPage;
