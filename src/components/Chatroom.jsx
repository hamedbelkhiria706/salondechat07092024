import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const Chatroom = ({
  messagesHistory = [{ id: 0, user: "salah", text: "aaaaaaaa" }],
}) => {
  const [messages, setMessages] = useState(messagesHistory || []);
  const { username = "Guest" } = useParams(); // Fallback to "Guest"

  const handleSendMessage = (text) => {
    const newMessage = { id: Date.now(), user: username, text }; // Unique ID
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <Container fluid>
      <MessageList messages={messages} username={username} />
      <MessageInput onSendMessage={handleSendMessage} />
    </Container>
  );
};

export default Chatroom;
