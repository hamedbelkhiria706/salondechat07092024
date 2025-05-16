// Exemple de structure dans MessageInput.jsx
import React, { useState } from 'react';

export default function MessageInput({ onSendMessage }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="message-input-area"> {/* Utilisation de .message-input-area */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Tapez votre message..."
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <button onClick={handleSubmit}>Envoyer</button>
    </div>
  );
}
