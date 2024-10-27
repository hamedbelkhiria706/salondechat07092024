import React from "react";
import "./stylescss/global.css";
import "./stylescss/login.css";
import $ from "jquery";
import "./js/login.js";

import Footer from "./footer";
const login = () => {
  return (
    <main>
      <div id="content"></div>

      <header class="mt-5 text-center">
        <div class="d-flex justify-content-between mb-4">
          <a href="login.html" class="nav-link active">
            Se connecter
          </a>
          <a href="signup.html" class="nav-link">
            S'inscrire
          </a>
        </div>

        <h1 class="mb-4">Se connecter à notre site</h1>
        <p>Déjà membre ? Connectez-vous pour commencer à discuter.</p>

        <div class="text-center social-buttons mb-4">
          <img src="assets/google.png" alt="Google" class="mx-2" />
          <img src="assets/facebook.png" alt="Facebook" class="mx-2" />
          <img src="assets/github.png" alt="GitHub" class="mx-2" />
        </div>
        <p class="text-center">OU</p>

        <form>
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
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="rememberMe" />
            <label class="form-check-label" for="rememberMe">
              Se souvenir de moi
            </label>
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            Se connecter
          </button>
        </form>
        <div class="text-center mt-3">
          <a href="#">Mot de passe oublié ?</a>
        </div>
      </header>

      <Footer />
    </main>
  );
};
export default login;
