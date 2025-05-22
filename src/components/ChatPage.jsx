// Exemple de structure dans ChatPage.jsx
import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import ChatArea from './ChatArea';
import MessageInput from './MessageInput';

// Données et fonctions fictives pour la démonstration
const mockUsers = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' },
];

const initialMessages = {
  '1': [
    { id: 'm1', text: 'Salut Bob!', senderId: 'currentUser', timestamp: Date.now() - 100000, senderName: 'Moi' },
    { id: 'm2', text: 'Salut Alice!', senderId: '1', timestamp: Date.now() - 90000, senderName: 'Alice' },
  ],
  '2': [
    { id: 'm3', text: 'Hello Charlie!', senderId: 'currentUser', timestamp: Date.now() - 80000, senderName: 'Moi' },
  ],
  '3': [], // Conversation vide avec Charlie au début
};

const currentUserMock = { id: 'currentUser', name: 'Moi' };

export default function ChatPage() {
  const [users, setUsers] = useState(mockUsers);
  const [activeUser, setActiveUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(currentUserMock);

  useEffect(() => {
    if (activeUser) {
      setMessages(initialMessages[activeUser.id] || []);
    } else {
      setMessages([]);
    }
  }, [activeUser]);

  const handleSelectUser = (user) => {
    setActiveUser(user);
  };

  const handleSendMessage = (text) => {
    if (!activeUser) return;

    const newMessage = {
      id: `msg-${Date.now()}`,
      text,
      senderId: currentUser.id,
      senderName: currentUser.name, // Ajout du nom de l'expéditeur
      timestamp: Date.now(),
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    // Dans une vraie application, vous mettriez à jour initialMessages ou l'état persistant
    if (!initialMessages[activeUser.id]) initialMessages[activeUser.id] = [];
    initialMessages[activeUser.id].push(newMessage);
  };

  return (
    <div className="chat-container"> {/* Utilisation de .chat-container */}
      <UserList users={users} activeUser={activeUser} onSelectUser={handleSelectUser} />
      <div className="chat-main-area"> {/* Un conteneur interne si besoin */}
        {activeUser ? (
          <>
            {/* Optionnel: Titre de la conversation avec l'utilisateur actif */}
            {/* <h2 className="chat-header">Conversation avec {activeUser.name}</h2> */}
            <ChatArea messages={messages} currentUser={currentUser} />
            <MessageInput onSendMessage={handleSendMessage} />
          </>
        ) : (
          <div className="chat-main-placeholder"> {/* Classe pour styler ce message */}
            <h2>Bienvenue sur le Salon de Chat !</h2>
            <p>Sélectionnez un utilisateur dans la liste à gauche pour commencer à discuter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
