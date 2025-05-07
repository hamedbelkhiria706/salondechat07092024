import React from "react";
import PropTypes from "prop-types";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="col-md-4 bg-dark">
      <div className="card mb-4 bg-dark text-white">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;