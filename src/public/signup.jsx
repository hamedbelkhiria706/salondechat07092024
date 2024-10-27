import React from "react";
import "./stylescss/global.css";

import "./js/signup.js";
const signup = () => {
  return (
    <main>
      <header class="mt-5 text-center">
        <div class="d-flex justify-content-between mb-4">
          <a href="login.html" class="nav-link">
            Se connecter
          </a>
          <a href="signup.html" class="nav-link active">
            S'inscrire
          </a>
        </div>

        <h1 class="mb-4">Nouveau sur le site ?</h1>
        <p>
          Créez un compte en quelques secondes et commencez à discuter
          immédiatement.
        </p>

        <div class="text-center mb-4">
          <div class="social-buttons">
            <img src="assets/google.png" alt="Google" class="mx-2" />
            <img src="assets/facebook.png" alt="Facebook" class="mx-2" />
            <img src="assets/github.png" alt="GitHub" class="mx-2" />
          </div>
          <p>OU</p>
        </div>

        <form>
          <div class="form-group">
            <label for="name">Nom :</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              required
              placeholder="Entrez votre nom"
            />
          </div>
          <div class="form-group">
            <label for="email">Email :</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              required
              placeholder="Entrez votre email"
            />
          </div>
          <div class="form-group">
            <label for="password">Mot de passe :</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              required
              placeholder="Entrez votre mot de passe"
            />
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirmez le mot de passe :</label>
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder="Confirmez votre mot de passe"
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="terms"
              required
            />
            <label class="form-check-label" for="terms">
              J'accepte les T&C et la Politique de confidentialité
            </label>
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            Créer un compte
          </button>
        </form>

        <div class="text-center mt-3">
          <p>
            Déjà un compte ?
            <a href="login.html" class="nav-link">
              Se connecter
            </a>
          </p>
        </div>
      </header>
    </main>
  );
};
export default signup;
