import React from "react";

import "./stylescss/global.css";
import "./stylescss/chatstyle.css";

import "./js/deleteaccount.js";

const deleteAccount = () => {
  return (
    <main>
      <Content />
      <div className="container mt-5">
        <h1>Supprimer Votre Compte</h1>
        <p>
          Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est
          irréversible.
        </p>
        <button className="btn btn-danger">Supprimer le compte</button>
        <a href="profile.html" className="btn btn-secondary mt-3">
          Retour au profil
        </a>
      </div>
    </main>
  );
};
export default deleteAccount;
