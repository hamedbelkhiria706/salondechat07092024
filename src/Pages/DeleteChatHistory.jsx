import React from "react";

 
import { Link } from "react-router-dom";
const deletechathistory = () => {
  return (
    <main>
      <div className="container mt-5">
        <h1>Sauvegarder l'Historique des Chats</h1>
        <p>Vous pouvez sauvegarder votre historique des chats ici.</p>
        <button className="btn btn-primary">Sauvegarder l'historique</button>
        <Link href="/profile" className="btn btn-secondary mt-3">
          Retour au profil
        </Link>
      </div>
    </main>
  );
};
export default deletechathistory;
