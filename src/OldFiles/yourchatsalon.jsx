import React from "react";
import "./stylescss/global.css";

import "./js/yourchatsalon.js";
const yourchatsalon = () => {
  return (
    <main>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Mes Salons de Chat</h1>

        <div className="row">
          <div className="col-12">
            <h4>Salons Créés</h4>
            <ul className="list-group mb-4" id="chatRooms">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Salon 1
                <button className="btn btn-danger btn-sm">Supprimer</button>
                <button
                  className="btn btn-info btn-sm"
                  data-room="Salon 1"
                  data-toggle="modal"
                  data-target="#addFriendModal"
                >
                  Ajouter Ami
                </button>
                <button
                  className="btn btn-success btn-sm rejoindre"
                  data-room="Salon 1"
                >
                  Rejoindre
                </button>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Salon 2
                <button className="btn btn-danger btn-sm">Supprimer</button>
                <button
                  className="btn btn-info btn-sm"
                  data-room="Salon 2"
                  data-toggle="modal"
                  data-target="#addFriendModal"
                >
                  Ajouter Ami
                </button>
                <button
                  className="btn btn-success btn-sm rejoindre"
                  data-room="Salon 2"
                >
                  Rejoindre
                </button>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Salon 3
                <button className="btn btn-danger btn-sm">Supprimer</button>
                <button
                  className="btn btn-info btn-sm"
                  data-room="Salon 3"
                  data-toggle="modal"
                  data-target="#addFriendModal"
                >
                  Ajouter Ami
                </button>
                <button
                  className="btn btn-success btn-sm rejoindre"
                  data-room="Salon 3"
                >
                  Rejoindre
                </button>
              </li>
            </ul>

            <h4>Amis</h4>
            <ul className="list-group" id="friendList">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Ami 1<button className="btn btn-danger btn-sm">Retirer</button>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Ami 2<button className="btn btn-danger btn-sm">Retirer</button>
              </li>
            </ul>

            <button className="btn btn-success mt-4" id="randomChatButton">
              Rejoindre un Salon aléatoire
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addFriendModal"
        tabindex="-1"
        aria-labelledby="addFriendModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addFriendModalLabel">
                Ajouter un Ami
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="addFriendForm">
                <div className="form-group">
                  <label for="friendName">Nom de l'Ami :</label>
                  <input
                    type="text"
                    className="form-control"
                    id="friendName"
                    required
                  />
                </div>
                <input type="hidden" id="selectedRoom" />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Annuler
              </button>
              <button
                type="button"
                className="btn btn-primary"
                id="addFriendButton"
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default yourchatsalon;
