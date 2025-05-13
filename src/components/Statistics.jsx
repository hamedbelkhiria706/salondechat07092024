import React from 'react';
import PropTypes from 'prop-types'; // Optionnel, mais recommandé pour la validation des props

function Statistics({ stats }) {
  // Valeurs par défaut si les props ne sont pas fournies
  const defaultStats = {
    chatRoomsCreated: 0,
    friendsCount: 0,
    blockedCount: 0,
    chatRoomsJoined: 0,
    membershipType: 'N/A',
  };

  const currentStats = { ...defaultStats, ...stats };

  return (
    <div className="container mt-4">
      <h2>Statistiques du compte</h2>
      <hr />
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Salons de chat créés
          <span className="badge bg-primary rounded-pill">{currentStats.chatRoomsCreated}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Amis
          <span className="badge bg-success rounded-pill">{currentStats.friendsCount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Utilisateurs bloqués
          <span className="badge bg-danger rounded-pill">{currentStats.blockedCount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Salons de chat rejoints
          <span className="badge bg-info rounded-pill">{currentStats.chatRoomsJoined}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Type d'adhésion
          <span className="badge bg-secondary">{currentStats.membershipType}</span>
        </li>
      </ul>
    </div>
  );
}

// Définition des PropTypes pour une meilleure maintenabilité et débogage
Statistics.propTypes = {
  stats: PropTypes.shape({
    chatRoomsCreated: PropTypes.number,
    friendsCount: PropTypes.number,
    blockedCount: PropTypes.number,
    chatRoomsJoined: PropTypes.number,
    membershipType: PropTypes.string,
  }),
};

// Valeurs par défaut pour les props si elles ne sont pas passées
Statistics.defaultProps = {
  stats: {}, // Les valeurs par défaut spécifiques sont gérées par defaultStats
};

export default Statistics;