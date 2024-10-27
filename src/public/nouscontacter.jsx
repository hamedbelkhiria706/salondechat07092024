import React from "react";
import "./stylescss/global.css";

import "./js/nouscontacter.js";
const nouscontacter = () => {
  return (
    <main>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Nous Contacter</h1>

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
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <form>
              <div className="form-group">
                <label for="name">Nom:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <label for="subject">Sujet:</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  required
                />
              </div>
              <div className="form-group">
                <label for="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
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
