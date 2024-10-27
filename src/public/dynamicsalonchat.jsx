import React from "react";
import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
import "./stylescss/global.css";

import $ from "jquery";
import "./js/dynamicsalonchat.js";
import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js";

const dynamicsalonchat = () => {
  return (
    <main>
      <div id="content"></div>
      <div class="container mt-5">
        <h1 class="text-center mb-4">Achetez un Abonnement</h1>

        <h4>Choisissez votre abonnement :</h4>
        <div id="subscriptionOptions" class="mb-4">
          <button class="btn btn-primary" data-price="30" data-maxrooms="9">
            30 € - 9 salons
          </button>
          <button class="btn btn-primary" data-price="20" data-maxrooms="3">
            20 € - 3 salons supplémentaires
          </button>
          <button class="btn btn-primary" data-price="10" data-maxrooms="1">
            10 € - 1 salon supplémentaire
          </button>
        </div>
        <h4 class="mt-5">Salons Créés</h4>
        <ul id="createdRoomsList" class="list-group mt-3"></ul>
        <h4>Créer des Salons de Chat</h4>
        <div id="subscriptionStatus" class="mt-4"></div>

        <form id="chatRoomForm" style="display: none">
          <div id="roomInputs"></div>
          <button type="submit" class="btn btn-primary">
            Créer les Salons
          </button>
        </form>
      </div>
    </main>
  );
};
export default dynamicsalonchat;
