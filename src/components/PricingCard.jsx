import React from "react";

const PricingCard = ({ plan, price, description, features, buttonText }) => {
  return (
    <div className="col-md-4 bg-dark">
      <div className="card text-center mb-4 bg-dark">
        <div className="card-header bg-dark">{plan}</div>
        <div className="card-body bg-dark">
          <h5 className="card-title bg-dark">{price}</h5>
          <p className="card-text bg-dark">{description}</p>
          <p className="card-text bg-dark">{features}</p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-outline-primary">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
