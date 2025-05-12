import React from "react";
import PropTypes from "prop-types";

const PricingCard = ({ plan, price, description, features, buttonText }) => {
  return (
    <div className="col-md-4">
      {/* Appliquer bg-dark et text-white à la carte parente si tout le contenu doit hériter de ces styles */}
      <div className="card text-center mb-4 bg-dark text-white h-100">
        <div className="card-header">{plan}</div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{price}</h5>
          <p className="card-text">{description}</p>
          {/* Rendre les features sous forme de liste si c'est un tableau */}
          {Array.isArray(features) && features.length > 0 && (
            <ul className="list-unstyled mt-3 mb-4">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
          {/* Si features n'est pas un tableau, l'afficher comme avant (pour la rétrocompatibilité) */}
          {!Array.isArray(features) && <p className="card-text">{features}</p>}
        </div>
        {/* Utiliser mt-auto sur le card-footer pour le pousser en bas si la card-body a une hauteur flexible */}
        <div className="card-footer mt-auto">
          <a href="#" className="btn btn-outline-primary">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  plan: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // features peut être une chaîne ou un tableau de chaînes
  features: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default PricingCard;
