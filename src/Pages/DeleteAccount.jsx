import React from "react";

import "../styles/global.css";
import "../styles/chatstyle.css";

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
        <Lin to="/profile" className="btn btn-secondary mt-3">
          Retour au profil
        </Lin>
      </div>
    </main>
  );
};
export default deleteAccount;
