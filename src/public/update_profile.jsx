import React from "react";
import "./stylescss/global.css";

import "./js/update_profile.js";
const update_profile = () => {
  return (
    <main>
      <div class="container mt-5">
        <h1>Modifier le profil</h1>

        <div class="row mt-4">
          <div class="col-md-4">
            <h5>Profil</h5>
            <ul class="list-group">
              <li class="list-group-item">
                <a href="password.html">Modifier le mot de passe</a>
              </li>
              <li class="list-group-item">
                <a href="notifications.html">Notifications</a>
              </li>
              <li class="list-group-item">
                <a href="exportdata.html">Exporter les données</a>
              </li>
              <li class="list-group-item">
                <a href="plugins.html">Plugins</a>
              </li>
              <li class="list-group-item">
                <a href="deletechathistory.html">
                  Sauvegarder l'historique des chats
                </a>
              </li>
              <li class="list-group-item">
                <a href="deleteaccount.html">Supprimer votre compte</a>
              </li>
            </ul>
          </div>
          <div class="col-md-8">
            <form>
              <div class="form-group">
                <label for="profile-photo">Photo de profil</label>
                <div class="mb-3">
                  <img
                    src="assets/CnP_08092024135607-min.png"
                    alt="Photo de profil"
                    id="profile-photo-preview"
                    class="img-thumbnail"
                    style="width: 150px; height: auto"
                  />
                </div>
                <input
                  type="file"
                  class="form-control"
                  id="profile-photo"
                  accept="image/png, image/jpeg"
                />
                <small class="form-text text-muted">
                  Votre photo doit être au format PNG ou JPG
                </small>
              </div>

              <div class="form-group">
                <label for="full-name">Nom complet</label>
                <input
                  type="text"
                  class="form-control"
                  id="full-name"
                  placeholder="Entrez votre nom complet"
                />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="votre-email@example.com"
                />
              </div>

              <div class="form-group">
                <label for="location">Emplacement</label>
                <select class="form-control" id="location">
                  <option>-Sélectionnez votre pays-</option>
                  <option>France</option>
                  <option>Allemagne</option>
                  <option>États-Unis</option>
                </select>
              </div>

              <div class="form-group">
                <label for="about-me">À propos de moi</label>
                <textarea
                  class="form-control"
                  id="about-me"
                  rows="4"
                  placeholder="Dites quelque chose sur vous"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary">
                Enregistrer le profil
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                onclick="window.location.href='dashboard.html'"
              >
                Annuler
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default update_profile;
