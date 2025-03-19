import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1 className="display-4">Bienvenue sur Notre Application de Chat</h1>
        <p className="lead">
          Discutez en toute simplicité avec vos amis, collègues et proches, où
          que vous soyez !
        </p>
        <a href="#" className="btn btn-primary btn-lg mt-4">
          Commencez à Chatter
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
