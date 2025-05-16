import React from "react";
 
import {Link} from 'react-router-dom'

// Suggestion: Utiliser PascalCase pour les noms de composants React.
// Suggestion: Accepter `userId` comme prop pour un lien de profil dynamique.
const ExportData = ({ userId }) => {

  // Suggestion: Implémenter la logique d'exportation réelle ici.
  const handleExportData = () => {
    // Exemple de logique (à remplacer par votre implémentation) :
    // 1. Récupérer les données utilisateur.
    // 2. Convertir les données en format CSV (ou autre).
    // 3. Déclencher le téléchargement du fichier.
    alert('Logique d\'exportation des données en CSV à implémenter.');
    console.log('Données exportées (simulation)');
  };

  return (
    <main>
      <div className="container mt-5">
        <h1>Exporter les Données</h1>
        <p>Cliquez ci-dessous pour exporter vos données.</p>
        <button onClick={handleExportData} className="btn btn-primary">
          Exporter mes données
        </button><br/>
        {/* Suggestion: Rendre le lien de profil dynamique en utilisant `userId` */}
        <Link to={userId ? `/user/${userId}/profile` : "/profile"} className="btn btn-secondary mt-3">
          Retour au profil
        </Link>
      </div>
    </main>
  );
};
export default ExportData;
