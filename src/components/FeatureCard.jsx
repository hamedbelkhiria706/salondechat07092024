import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="col-md-4 bg-dark">
      <div className="card mb-4 bg-dark">
        <div className="card-body bg-dark">
          <h5 className="card-title bg-dark text-white">{title}</h5>
          <p className="card-text bg-dark text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
