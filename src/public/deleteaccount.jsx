import React from "react";

import "./stylescss/global.css";
import "./stylescss/chatstyle.css";
import $ from "jquery";

import "./js/deleteaccount.js";

const deleteAccount = () => {
  return (
    <main>
      <Content />
      <div class="container mt-5">
        <h1>Supprimer Votre Compte</h1>
        <p>
          Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est
          irréversible.
        </p>
        <button class="btn btn-danger">Supprimer le compte</button>
        <a href="profile.html" class="btn btn-secondary mt-3">
          Retour au profil
        </a>
      </div>
    </main>
  );
};
export default deleteAccount;
