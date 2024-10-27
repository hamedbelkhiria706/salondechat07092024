import React from "react";
import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
import "./stylescss/global.css";

import $ from "jquery";
import "./js/notifications.js";
const notifications = () => {
  return (
    <main>
      <div class="container mt-5">
        <h1>Notifications</h1>
        <p>Gérez vos paramètres de notification ici.</p>
        <form>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="email-notifications"
              checked
            />
            <label class="form-check-label" for="email-notifications">
              Recevoir des notifications par email
            </label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="sms-notifications"
            />
            <label class="form-check-label" for="sms-notifications">
              Recevoir des notifications par SMS
            </label>
          </div>
          <button type="submit" class="btn btn-primary mt-3">
            Sauvegarder les paramètres
          </button>
        </form>
        <a href="profile.html" class="btn btn-secondary mt-3">
          Retour au profil
        </a>
      </div>
    </main>
  );
};
export default notifications;
