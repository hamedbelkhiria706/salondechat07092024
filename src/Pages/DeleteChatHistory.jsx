import React from "react";

import "../styles/global.css";

const deletechathistory = () => {
  return (
    <main>
      <div className="container mt-5">
        <h1>Sauvegarder l'Historique des Chats</h1>
        <p>Vous pouvez sauvegarder votre historique des chats ici.</p>
        <button className="btn btn-primary">Sauvegarder l'historique</button>
        <a href="profile.html" className="btn btn-secondary mt-3">
          Retour au profil
        </a>
      </div>
    </main>
  );
};
export default deletechathistory;
