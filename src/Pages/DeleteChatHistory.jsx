import React from "react";
import { Link } from "react-router-dom";

const DeleteChatHistory = () => {
  const handleDeleteHistory = () => {
    // Il est crucial d'ajouter une confirmation avant une suppression !
    const isConfirmed = window.confirm(
      "Êtes-vous sûr de vouloir supprimer tout l'historique des chats ? Cette action est irréversible."
    );

    if (isConfirmed) {
      // TODO: Implémenter la logique de suppression de l'historique des chats.
      // Cela impliquera généralement un appel API à votre backend.
      console.log("La suppression de l'historique des chats a été confirmée et demandée.");
      // Vous pourriez afficher une notification de succès ou d'erreur ici.
      alert("L'historique des chats a été supprimé (simulation)."); // Placeholder
    } else {
      console.log("La suppression de l'historique des chats a été annulée.");
    }
  };

  return (
    <main>
      <div className="container mt-5">
        <h1>Supprimer l'Historique des Chats</h1>
        <p className="text-danger">Attention : Cette action est irréversible.</p>
        <p>Vous pouvez supprimer l'intégralité de votre historique des chats ici.</p>
        <button className="btn btn-danger" onClick={handleDeleteHistory}>
          Supprimer tout l'historique
        </button>
        <Link to="/profile" className="btn btn-secondary mt-3 ms-2">
          Retour au profil
        </Link>
      </div>
    </main>
  );
};
export default DeleteChatHistory;
