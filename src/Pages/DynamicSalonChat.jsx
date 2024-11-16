import React from "react";

import "../styles/global.css";

console.log("hello world");

let totalRooms = 0;
let totalPayments = 0;
let createdRooms = [];
console.log("hello world");
function renderRoomInputs() {
  $("#roomInputs").empty();
  for (let i = 1; i <= totalRooms; i++) {
    $("#roomInputs").append(`
        <div class="form-group">
          <label for="roomName${i}">Nom du Salon ${i} :</label>
          <input type="text" class="form-control room-input" id="roomName${i}" />
        </div>
      `);
  }
}

$("#subscriptionOptions button").on("click", function () {
  const price = $(this).data("price");
  const maxRooms = $(this).data("maxrooms");

  totalPayments += price;
  totalRooms += maxRooms;

  $("#subscriptionStatus").text(
    `Total payé : ${totalPayments} € - Salons autorisés : ${totalRooms}`
  );

  renderRoomInputs();
  $("#chatRoomForm").show();
});

$("#chatRoomForm").on("submit", function (event) {
  event.preventDefault();

  let newRooms = [];

  $(".room-input").each(function () {
    const roomName = $(this).val().trim();
    if (roomName) {
      newRooms.push(roomName);
    }
  });

  createdRooms = createdRooms.concat(newRooms);

  alert(`${newRooms.length} salon(s) créé(s) avec succès !`);
  totalRooms -= newRooms.length;
  updateCreatedRoomsList();
  renderRoomInputs();
});

updateCreatedRoomsList();

function updateCreatedRoomsList() {
  $("#createdRoomsList").empty();
  createdRooms.forEach((room, index) => {
    $("#createdRoomsList").append(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Salon ${index + 1}: ${room}
          <button class="btn btn-danger btn-sm remove-room" data-index="${index}">Supprimer</button>
        </li>
      `);
  });
}

$(document).on("click", ".remove-room", function () {
  const index = $(this).data("index");
  createdRooms.splice(index, 1);
  totalRooms++; // Increment totalRooms when a room is removed
  updateCreatedRoomsList();
  renderRoomInputs();
});

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
          <div id="roomInputs">1</div>
          <button type="submit" className="btn btn-primary">
            Créer les Salons
          </button>
        </form>
      </div>
    </main>
  );
};
export default dynamicsalonchat;
