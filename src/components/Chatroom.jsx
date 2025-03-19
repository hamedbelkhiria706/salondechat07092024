import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const Chatroom = ({
  messagesHistory = [{ id: 0, user: "salah", text: "bonjour" }],
}) => {
  const [messages, setMessages] = useState(messagesHistory || []);
  const { userId } = useParams(); const username = userId || "Guest" // Fallback to "Guest"

  const handleSendMessage = (text) => {
    const newMessage = { id: Date.now(), user: username, text }; // Unique ID
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <Container fluid>
       <h4>Bienvenue dans la salle de chat</h4>
            <p>
              Rejoignez la salle de chat pour discuter instantanément avec vos
              amis et collègues. Participez à des conversations en groupe ou en
              tête-à-tête, partagez des fichiers et échangez en temps réel.
            </p>
      <MessageList messages={messages} username={username} />
      <MessageInput onSendMessage={handleSendMessage} />
    </Container>
  );
};

export default Chatroom;
