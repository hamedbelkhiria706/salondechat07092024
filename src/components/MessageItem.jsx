import React from "react";
import PropTypes from "prop-types";
import { CardBody } from "react-bootstrap";

function MessageItem({ message, isOwner, showUsername }) {
  const { text, user } = message;
  return (
    // Using React.memo will prevent re-rendering if props haven't changed.
    <CardBody>
      <div
        className={`d-flex flex-row align-items-center ${
          isOwner ? "justify-content-end" : "justify-content-start"
        }`}
      >
        <p
          className={`small p-1 px-3 m-0 rounded-pill ${
            isOwner ? "bg-primary text-light" : "bg-light"
          }`}
        >
          {text}
        </p>
        {showUsername && (
          <span className="text-muted text-capitalize fs-6 ml-2">
            {user}
          </span>
        )}
      </div>
    </CardBody>
  );
}

MessageItem.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    // Add other properties of message object if any, e.g., id, timestamp
  }).isRequired,
  isOwner: PropTypes.bool.isRequired,
  showUsername: PropTypes.bool.isRequired,
};

export default React.memo(MessageItem);
