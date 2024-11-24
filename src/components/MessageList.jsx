import React from "react";
import { Card } from "react-bootstrap";
import MessageItem from "./MessageItem";

function MessageList({ messages, username }) {
  let prevUser = null;
  console.log(messages);

  return (
    <Card className="w-100" style={{ maxHeight: "200px", overflowY: "auto" }}>
      {messages.map((message, index) => {
        const isOwner = message.user === username; // Example condition for owner

        // Determine whether the username should be shown (only show if the user changes)
        const showUsername = message.user !== prevUser;

        const messageComponent = (
          <MessageItem
            key={index}
            message={message}
            isOwner={isOwner}
            showUsername={showUsername} // Pass whether to show username
          />
        );

        // Update prevUser for the next iteration
        prevUser = message.user;

        return messageComponent;
      })}
    </Card>
  );
}

export default MessageList;
