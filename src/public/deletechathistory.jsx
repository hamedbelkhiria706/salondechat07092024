import React from "react";

import "./stylescss/global.css";

import $ from "jquery";

import "./js/deletechathistory.js";

const deletechathistory = () => {
  return (
    <main>
      <div class="container mt-5">
        <h1>Sauvegarder l'Historique des Chats</h1>
        <p>Vous pouvez sauvegarder votre historique des chats ici.</p>
        <button class="btn btn-primary">Sauvegarder l'historique</button>
        <a href="profile.html" class="btn btn-secondary mt-3">
          Retour au profil
        </a>
      </div>
    </main>
  );
};
export default deletechathistory;
