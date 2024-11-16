import React, { useState } from "react";

import "../styles/global.css";

console.log("hello world");
const dynamicsalonchat = () => {
  let [totalRooms, setTotalRooms] = useState(0);
  let [totalPayments, setTotalPayments] = useState(0);

  let [createdRooms, setCreatedRooms] = useState([]);
  let [newRooms, setNewRooms] = useState;
  const handleClick = (price, maxRooms) => {
    setTotalPayments((prevPayments) => prevPayments + price);
    setTotalRooms((prevRooms) => prevRooms + maxRooms);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const roomNames = newRooms.filter((roomName) => roomName.trim());
    setCreatedRooms([...createdRooms, ...roomNames]);
    setTotalRooms(totalRooms - roomNames.length);
    setNewRooms([]);
    alert(`${roomNames.length} salon(s) créé(s) avec succès !`);
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
    setTotalRooms(totalRooms + 1);
  };

  return (
    <main>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Achetez un Abonnement</h1>
        <h4>Choisissez votre abonnement :</h4>
        <div id="subscriptionOptions" className="mb-4">
          {" "}
          <button
            className="btn btn-primary"
            data-price={30}
            data-maxrooms={9}
            onClick={() => handleClick(30, 9)}
          >
            {" "}
            30 € - 9 salons{" "}
          </button>{" "}
          <button
            className="btn btn-primary"
            data-price={20}
            data-maxrooms={3}
            onClick={() => handleClick(20, 3)}
          >
            {" "}
            20 € - 3 salons supplémentaires{" "}
          </button>{" "}
          <button
            className="btn btn-primary"
            data-price={10}
            data-maxrooms={1}
            onClick={() => handleClick(10, 1)}
          >
            {" "}
            10 € - 1 salon supplémentaire{" "}
          </button>{" "}
        </div>{" "}
        <div id="subscriptionStatus">
          {" "}
          Total payé : {totalPayments} € - Salons autorisés : {totalRooms}{" "}
        </div>
        <h4 className="mt-5">Salons Créés</h4>
        <ul id="createdRoomsList" className="list-group mt-3"></ul>
        <h4>Créer des Salons de Chat</h4>
        <div id="subscriptionStatus" className="mt-4"></div>
        <form id="chatRoomForm" style={{ display: "none" }}>
          <div id="roomInputs">
            {[...Array(totalRooms)].map((_, index) => (
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
          <button type="submit" className="btn btn-primary">
            Créer les Salons
          </button>
        </form>
      </div>
    </main>
  );
};
export default dynamicsalonchat;
