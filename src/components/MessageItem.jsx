import React from "react";
import { CardBody } from "react-bootstrap";

function MessageItem({ message, isOwner, showUsername }) {
  return (
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
          {message.text}
        </p>
        {showUsername && (
          <span className="text-muted text-capitalize fs-6 ml-2">
            {message.user}
          </span>
        )}
      </div>
    </CardBody>
  );
}

export default MessageItem;
