import React, { useState } from "react";
import { Container } from "react-bootstrap";

const MessageInput = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (event) => {
    event.preventDefault(); // Prevent page refresh
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage(""); // Clear input field
    }
  };

  return (
    <div className="d-flex w-100 mt-3 gap-3">
      <input
        type="text"
        className="form-control mr-3"
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSendMessage(e); // Prevent refresh
        }}
      />
      <button className="btn btn-primary" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
