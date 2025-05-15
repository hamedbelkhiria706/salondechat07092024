// Exemple de structure dans ChatPage.jsx
import UserList from './UserList';
import ChatArea from './ChatArea';
import MessageInput from './MessageInput';

function ChatPage() {
  // ... logique, états pour les utilisateurs, messages, etc.
  return (
    <div className="chat-container"> {/* Utilisation de .chat-container */}
      <UserList users={users} activeUser={activeUser} onSelectUser={handleSelectUser} />
      <div className="chat-main-area"> {/* Un conteneur interne si besoin */}
        <ChatArea messages={messages} currentUser={currentUser} />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
