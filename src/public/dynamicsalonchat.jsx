import React from "react";

import "./stylescss/global.css";

import "./js/dynamicsalonchat.js";

const dynamicsalonchat = () => {
  return (
    <main>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Achetez un Abonnement</h1>

        <h4>Choisissez votre abonnement :</h4>
        <div id="subscriptionOptions" className="mb-4">
          <button className="btn btn-primary" data-price="30" data-maxrooms="9">
            30 € - 9 salons
          </button>
          <button className="btn btn-primary" data-price="20" data-maxrooms="3">
            20 € - 3 salons supplémentaires
          </button>
          <button className="btn btn-primary" data-price="10" data-maxrooms="1">
            10 € - 1 salon supplémentaire
          </button>
        </div>
        <h4 className="mt-5">Salons Créés</h4>
        <ul id="createdRoomsList" className="list-group mt-3"></ul>
        <h4>Créer des Salons de Chat</h4>
        <div id="subscriptionStatus" className="mt-4"></div>

        <form id="chatRoomForm" style={{ display: "none" }}>
          <div id="roomInputs"></div>
          <button type="submit" className="btn btn-primary">
            Créer les Salons
          </button>
        </form>
      </div>
    </main>
  );
};
export default dynamicsalonchat;
