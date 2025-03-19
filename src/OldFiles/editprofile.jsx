import React from "react";
import "./stylescss/global.css";

import $ from "jquery";

import "./js/editprofile.js";

const editprofile = () => {
  return (
    <main>
      <div className="container mt-5">
        <h1 className="text-center">Modifier le Profil</h1>

        <div className="row mt-4">
          <div className="col-12 col-md-8 offset-md-2">
            <form>
              <div className="form-group">
                <label for="firstName">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Entrez votre prénom"
                />
              </div>

              <div className="form-group">
                <label for="lastName">Nom de Famille</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Entrez votre nom de famille"
                />
              </div>

              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Entrez votre adresse email"
                />
              </div>

              <div className="form-group">
                <label for="bio">Bio</label>
                <textarea
                  className="form-control"
                  id="bio"
                  rows="3"
                  placeholder="Parlez-nous de vous-même"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Enregistrer les Modifications
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default editprofile;
