import React from "react";
import "./stylescss/global.css";
import "./stylescss/login.css";

import "./js/login.js";

import Footer from "./footer";
const login = () => {
  return (
    <main>
      <div id="content"></div>

      <header className="mt-5 text-center">
        <div className="d-flex justify-content-between mb-4">
          <Link to="/login" className="nav-link active">
            Se connecter
          </Link>
          <Link to="/signup" className="nav-link">
            S'inscrire
          </Link>
        </div>

        <h1 className="mb-4">Se connecter à notre site</h1>
        <p>Déjà membre ? Connectez-vous pour commencer à discuter.</p>

        <div className="text-center social-buttons mb-4">
          <img src="assets/google.png" alt="Google" className="mx-2" />
          <img src="assets/facebook.png" alt="Facebook" className="mx-2" />
          <img src="assets/github.png" alt="GitHub" className="mx-2" />
        </div>
        <p className="text-center">OU</p>

        <form>
          <div className="form-group">
            <label for="email">Email :</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              placeholder="Entrez votre email"
            />
          </div>
          <div className="form-group">
            <label for="password">Mot de passe :</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
              placeholder="Entrez votre mot de passe"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" for="rememberMe">
              Se souvenir de moi
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Se connecter
          </button>
        </form>
        <div className="text-center mt-3">
          <a href="#">Mot de passe oublié ?</a>
        </div>
      </header>

      <Footer />
    </main>
  );
};
export default login;
