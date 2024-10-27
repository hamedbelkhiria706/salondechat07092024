import React from "react";
import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
import "./stylescss/global.css";

import $ from "jquery";
import "./js/password.js";

const password = () => {
  return (
    <main>
      <div class="container mt-5">
        <h1>Modifier le Mot de Passe</h1>

        <form>
          <div class="form-group">
            <label for="current-password">Mot de passe actuel</label>
            <input
              type="password"
              class="form-control"
              id="current-password"
              placeholder="Entrez votre mot de passe actuel"
              required
            />
          </div>
          <div class="form-group">
            <label for="new-password">Nouveau mot de passe</label>
            <input
              type="password"
              class="form-control"
              id="new-password"
              placeholder="Entrez un nouveau mot de passe"
              required
            />
          </div>
          <div class="form-group">
            <label for="confirm-password">
              Confirmer le nouveau mot de passe
            </label>
            <input
              type="password"
              class="form-control"
              id="confirm-password"
              placeholder="Confirmez le nouveau mot de passe"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Mettre à jour le mot de passe
          </button>
        </form>
        <a href="profile.html" class="btn btn-secondary mt-3">
          Retour au profil
        </a>
      </div>
    </main>
  );
};
export default password;
