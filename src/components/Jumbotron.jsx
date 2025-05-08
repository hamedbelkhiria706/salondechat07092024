import React from "react";
import PropTypes from "prop-types";

const Jumbotron = ({
  title = "Bienvenue sur Notre Application de Chat",
  leadText = "Discutez en toute simplicité avec vos amis, collègues et proches, où que vous soyez !",
  buttonText = "Commencez à Chatter",
  onButtonClick,
}) => {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{leadText}</p>
        {onButtonClick && (
          <button
            type="button"
            className="btn btn-primary btn-lg mt-4"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

Jumbotron.propTypes = {
  title: PropTypes.string,
  leadText: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default Jumbotron;
