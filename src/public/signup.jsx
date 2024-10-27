import React from "react";
import "./stylescss/global.css";

import "./js/signup.js";
const signup = () => {
  return (
    <main>
      <header className="mt-5 text-center">
        <div className="d-flex justify-content-between mb-4">
          <a href="login.html" className="nav-link">
            Se connecter
          </a>
          <a href="signup.html" className="nav-link active">
            S'inscrire
          </a>
        </div>

        <h1 className="mb-4">Nouveau sur le site ?</h1>
        <p>
          Créez un compte en quelques secondes et commencez à discuter
          immédiatement.
        </p>

        <div className="text-center mb-4">
          <div className="social-buttons">
            <img src="assets/google.png" alt="Google" className="mx-2" />
            <img src="assets/facebook.png" alt="Facebook" className="mx-2" />
            <img src="assets/github.png" alt="GitHub" className="mx-2" />
          </div>
          <p>OU</p>
        </div>

        <form>
          <div className="form-group">
            <label for="name">Nom :</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
              placeholder="Entrez votre nom"
            />
          </div>
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
          <div className="form-group">
            <label for="confirmPassword">Confirmez le mot de passe :</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder="Confirmez votre mot de passe"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              required
            />
            <label className="form-check-label" for="terms">
              J'accepte les T&C et la Politique de confidentialité
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Créer un compte
          </button>
        </form>

        <div className="text-center mt-3">
          <p>
            Déjà un compte ?
            <a href="login.html" className="nav-link">
              Se connecter
            </a>
          </p>
        </div>
      </header>
    </main>
  );
};
export default signup;
