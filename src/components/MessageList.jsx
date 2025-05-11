import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import MessageItem from "./MessageItem";

function MessageList({ messages, username }) {
  return (
    <Card className="w-100" style={{ maxHeight: "200px", overflowY: "auto" }}>
      {messages.map((message, index) => {
        const isOwner = message.user === username;

        // Determine whether the username should be shown:
        // Show if it's the first message OR if the current message's user
        // is different from the previous message's user.
        const prevMessage = messages[index - 1];
        const showUsername = !prevMessage || prevMessage.user !== message.user;

        // Assuming each message has a unique 'id' property.
        // If not, using 'index' is a fallback but less ideal if the list can change order.
        return (
          <MessageItem
            key={message.id || index} // Prefer a stable 'id' if available
            message={message}
            isOwner={isOwner}
            showUsername={showUsername}
          />
        );
      })}
    </Card>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Assuming an id for key prop
      text: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    })
  ).isRequired,
  username: PropTypes.string.isRequired,
};

export default React.memo(MessageList);
