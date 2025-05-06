import React, { useState } from "react";

import "../styles/global.css";

const subscriptionOptionsData = [
  { id: "sub1", price: 30, maxRooms: 9, label: "30 € - 9 salons" },
  { id: "sub2", price: 20, maxRooms: 3, label: "20 € - 3 salons supplémentaires" },
  { id: "sub3", price: 10, maxRooms: 1, label: "10 € - 1 salon supplémentaire" },
];

const DynamicSalonChat = () => {
  let [availableSlots, setAvailableSlots] = useState(0);
  let [totalPayments, setTotalPayments] = useState(0);

  let [createdRooms, setCreatedRooms] = useState([]);
  let [newRooms, setNewRooms] = useState([]);

  const handleClick = (price, maxRooms) => {
    setTotalPayments((prevPayments) => prevPayments + price);
    setAvailableSlots((prevSlots) => prevSlots + maxRooms);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const roomNames = newRooms.filter((roomName) => roomName.trim());
    if (roomNames.length > 0) {
      setCreatedRooms((prevCreatedRooms) => [...prevCreatedRooms, ...roomNames]);
      setAvailableSlots((prevSlots) => prevSlots - roomNames.length);
      alert(`${roomNames.length} salon(s) créé(s) avec succès !`);
    } else {
      alert("Veuillez nommer au moins un salon.");
    }
    setNewRooms([]);
  };

  const handleRoomNameChange = (index, value) => {
    const updatedRooms = [...newRooms];
    updatedRooms[index] = value;
    setNewRooms(updatedRooms);
  };

  const removeRoom = (index) => {
    const updatedRooms = [...createdRooms];
    updatedRooms.splice(index, 1);
    setCreatedRooms(updatedRooms);
    setAvailableSlots((prevSlots) => prevSlots + 1);
  };

  return (
    <main>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Achetez un Abonnement</h1>
        <h4>Choisissez votre abonnement :</h4>
        <div id="subscriptionOptions" className="mb-4">
          {subscriptionOptionsData.map((option) => (
            <button
              key={option.id}
              className="btn btn-primary me-2"
              onClick={() => handleClick(option.price, option.maxRooms)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div id="subscriptionStatus">
          {" "}
          Total payé : {totalPayments} € - Salons autorisés à créer : {availableSlots}{" "}
        </div>
        <h4 className="mt-5">Salons Créés</h4>
        {/* L'ancien ul vide a été supprimé ici */}
        <h4>Créer des Salons de Chat</h4>
        {/* L'ancien div vide a été supprimé ici */}
        <form
          id="chatRoomForm"
          onSubmit={handleSubmit}
          style={{ display: totalPayments > 0 ? "block" : "none" }}
        >
          <div id="roomInputs">
            {[...Array(availableSlots)].map((_, index) => (
              <div className="form-group" key={index}>
                <label htmlFor={`roomName${index + 1}`}>
                  Nom du Salon {index + 1} :
                </label>
                <input
                  type="text"
                  className="form-control room-input"
                  id={`roomName${index + 1}`}
                  value={newRooms[index] || ""}
                  onChange={(e) => handleRoomNameChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>
          <div>Salons crées:</div>
          <ul id="createdRoomsList" className="list-group mt-3 mb-3">
            {" "}
            {createdRooms.map((room, index) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                {" "}
                Salon {index + 1}: {room}{" "}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeRoom(index)}
                >
                  Supprimer
                </button>{" "}
              </li>
            ))}{" "}
          </ul>
          <button type="submit" className="btn btn-primary">
            Créer les Salons
          </button>
        </form>
      </div>
    </main>
  );
};
export default DynamicSalonChat;
