import React from "react";
import "./stylescss/global.css";
import "./stylescss/login.css";
import { Link } from "react-router-dom";
import "./js/login.js";
import _1 from "./assets/facebook.png";
import _2 from "./assets/github.png";
import _3 from "./assets/google.png";
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
          <img src={_3} alt="Google" className="mx-2" />
          <img src={_1} alt="Facebook" className="mx-2" />
          <img src={_2} alt="GitHub" className="mx-2" />
        </div>
        <p className="text-center">OU</p>

        <form>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
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
            <label htmlFor="password">Mot de passe :</label>
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
            <label className="form-check-label" htmlFor="rememberMe">
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
    </main>
  );
};
export default login;
