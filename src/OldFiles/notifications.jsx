import React from "react";
import "./stylescss/global.css";

import "./js/notifications.js";
const notifications = () => {
  return (
    <main>
      <div className="container mt-5">
        <h1>Notifications</h1>
        <p>Gérez vos paramètres de notification ici.</p>
        <form>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="email-notifications"
              checked
            />
            <label className="form-check-label" for="email-notifications">
              Recevoir des notifications par email
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="sms-notifications"
            />
            <label className="form-check-label" for="sms-notifications">
              Recevoir des notifications par SMS
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Sauvegarder les paramètres
          </button>
        </form>
        <a href="profile.html" className="btn btn-secondary mt-3">
          Retour au profil
        </a>
      </div>
    </main>
  );
};
export default notifications;
