// Exemple de structure dans UserList.jsx
function UserList({ users, activeUser, onSelectUser }) {
  return (
    <div className="user-list"> {/* Utilisation de .user-list */}
      {users.map(user => (
        <div
          key={user.id}
          className={`user-list-item ${user.id === activeUser?.id ? 'active' : ''}`} // Utilisation de .user-list-item et .active
          onClick={() => onSelectUser(user)}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}
