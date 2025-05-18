import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Supposons que vous ayez une fonction pour appeler votre API de suppression
// import { deleteUserAccount } from './api'; // Décommentez et ajustez le chemin si nécessaire

const DeleteAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Simuler un appel API pour la suppression
      // Remplacez ceci par votre véritable appel API:
      // await deleteUserAccount();
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simule une attente de 2s

      // Si la suppression réussit
      alert("Votre compte a été supprimé avec succès.");
      navigate("/"); // Rediriger vers la page d'accueil ou une autre page appropriée
    } catch (err) {
      setError(
        "Une erreur s'est produite lors de la suppression de votre compte. Veuillez réessayer."
      );
      console.error("Erreur de suppression de compte:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {/* Si le composant Content est défini ailleurs et nécessaire, vous pouvez le remettre.
          Sinon, il a été retiré car non défini dans le snippet initial.
      <Content /> 
      */}
      <div className="container mt-5">
        <h1>Supprimer Votre Compte</h1>
        <p>
          Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est
          irréversible.
        </p>
        {error && <div className="alert alert-danger">{error}</div>}
        <button
          className="btn btn-danger"
          onClick={handleDeleteAccount}
          disabled={isLoading}
        >
          {isLoading ? "Suppression en cours..." : "Supprimer le compte"}
        </button>
        <Link to="/profile" className="btn btn-secondary mt-3 ms-2">
          Retour au profil
        </Link>
      </div>
    </main>
  );
};
export default DeleteAccount;
