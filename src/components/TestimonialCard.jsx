import React from "react";
import PropTypes from "prop-types";
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
TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default TestimonialCard;
