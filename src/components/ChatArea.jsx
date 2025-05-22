// src/components/ChatArea.jsx
import React, { useEffect, useRef } from 'react';

export default function ChatArea({ messages, currentUser }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Fait défiler vers le bas à chaque fois que les messages sont mis à jour
    scrollToBottom();
  }, [messages]);

  // Contenu textuel lorsque la liste des messages est vide
  if (!messages || messages.length === 0) {
    return (
      <div className="chat-area" aria-live="polite"> {/* .chat-area pour le style */}
        <p className="chat-empty-message"> {/* Classe pour styler le message vide */}
          Les messages de cette conversation apparaîtront ici. Envoyez le premier message pour commencer !
        </p>
      </div>
    );
  }

  // Affichage des messages
  return (
    <div className="chat-area" aria-live="polite"> {/* .chat-area pour le style, aria-live pour l'accessibilité */}
      {messages.map(message => (
        <div
          key={message.id} // Assurez-vous que chaque message a un 'id' unique
          className={`message-item ${message.senderId === currentUser?.id ? 'sent' : 'received'}`}
          // Classes 'message-item', 'sent', 'received' pour le style
        >
          <div className="message-content">
            {/* Le contenu textuel principal du message */}
            <p>{message.text}</p>
            {/*
              Optionnel : Vous pouvez ajouter d'autres informations textuelles ici, comme :
              - Le nom de l'expéditeur (si différent de currentUser et pertinent, ex: dans un chat de groupe)
              {message.senderId !== currentUser?.id && message.senderName && (
                <span className="message-sender-name">{message.senderName}</span>
              )}
              - L'heure d'envoi du message
              {message.timestamp && (
                <span className="message-timestamp">
                  {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              )}
            */}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} /> {/* Élément vide pour permettre le défilement vers le bas */}
    </div>
  );
}