// Exemple de structure dans UserList.jsx
export default function UserList({ users, activeUser, onSelectUser }) {
  return (
    <div className="user-list"> {/* Utilisation de .user-list */}
      {(!users || users.length === 0) ? (
        <p className="user-list-empty-message">Aucun utilisateur à afficher pour le moment.</p>
      ) : (
        users.map(user => (
          <div
            key={user.id}
            className={`user-list-item ${user.id === activeUser?.id ? 'active' : ''}`} // Utilisation de .user-list-item et .active
            onClick={() => onSelectUser(user)}
            role="button" // Amélioration pour l'accessibilité
            tabIndex={0}   // Permet la navigation au clavier
          >
            {user.name}
          </div>
        ))
      )}
    </div>
  );
}
