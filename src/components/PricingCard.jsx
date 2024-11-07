import React from "react";

const PricingCard = ({ plan, price, description, features, buttonText }) => {
  return (
    <div className="col-md-4">
      <div className="card text-center mb-4">
        <div className="card-header">{plan}</div>
        <div className="card-body">
          <h5 className="card-title">{price}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{features}</p>
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
