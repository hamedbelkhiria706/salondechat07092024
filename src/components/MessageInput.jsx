import React, { useState } from "react";

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
    <form onSubmit={handleSendMessage} className="d-flex w-100 mt-3 gap-3">
      <input
        type="text"
        className="form-control"
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        aria-label="Type a message"
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!newMessage.trim()}
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;
