import React from "react";
import "./stylescss/global.css";

import $ from "jquery";
import "./js/nouscontacter.js";
const nouscontacter = () => {
  return (
    <main>
      <div class="container mt-5">
        <h1 class="text-center mb-4">Nous Contacter</h1>

        <h4>Vous avez des questions ou besoin d’aide ?</h4>
        <p>
          Contactez notre équipe et nous vous répondrons dans les plus brefs
          délais.
        </p>

        <hr />

        <h4>Informations de contact :</h4>
        <ul>
          <li>
            <strong>Adresse</strong> : 123 Rue de la Communication, Toulouse,
            France
          </li>
          <li>
            <strong>Téléphone</strong> : +33-123-456-789
          </li>
          <li>
            <strong>Email</strong> :
            <a href="mailto:support@nomdelapp.com">support@nomdelapp.com</a>
          </li>
        </ul>

        <hr />

        <h4>Formulaire de contact</h4>
        <p>Remplissez ce formulaire pour toute demande :</p>
        <div class="row justify-content-center">
          <div class="col-12 col-md-8">
            <form>
              <div class="form-group">
                <label for="name">Nom:</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="subject">Sujet:</label>
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  name="subject"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-block">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default nouscontacter;
