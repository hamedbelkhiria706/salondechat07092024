import React, { useState } from "react";
import { Link } from "react-router-dom";

const SaveChatHistory = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveHistory = async () => {
    setIsLoading(true);
    setStatusMessage("Sauvegarde en cours...");
    try {
      // Simuler un appel API ou une opération de sauvegarde
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simule une attente
      
      // TODO: Intégrez ici votre logique de sauvegarde réelle.
      // Par exemple, un appel API:
      // const response = await fetch('/api/chat/save-history', { method: 'POST', body: JSON.stringify(chatHistory) });
      // if (!response.ok) throw new Error('Failed to save history');
      
      console.log("Historique des chats sauvegardé (simulation).");
      setStatusMessage("Historique sauvegardé avec succès !");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de l'historique :", error);
      setStatusMessage("Erreur lors de la sauvegarde. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <div className="container mt-5">
        <h1>Sauvegarder l'Historique des Chats</h1>
        <p>Sauvegardez l'historique de vos chats pour conserver une trace de vos conversations et y accéder quand vous le souhaitez.</p>
        <button className="btn btn-primary" onClick={handleSaveHistory} disabled={isLoading}>
          {isLoading ? "Sauvegarde en cours..." : "Sauvegarder l'historique"}
        </button>
        <Link to="/profile" className="btn btn-secondary mt-3 ms-2">
          Retour au profil
        </Link>
        {statusMessage && <p className={`mt-3 ${statusMessage.includes("Erreur") ? "text-danger" : "text-success"}`}>{statusMessage}</p>}
      </div>
    </main>
  );
};

export default SaveChatHistory;