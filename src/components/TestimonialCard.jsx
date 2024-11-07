import React from "react";

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="col-md-4">
      <blockquote className="blockquote text-center">
        <p className="mb-1">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
