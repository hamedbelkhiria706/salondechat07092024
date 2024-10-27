import React from "react";
import "./stylescss/global.css";

import "./js/randomchatsalon.js";
const randomchatsalon = () => {
  return (
    <main>
      <div className="container mt-5">
        <h1 className="text-center mb-4" id="chatRoomName">
          Salon de Chat
        </h1>

        <div className="row">
          <div className="col-md-4">
            <h4>Utilisateurs en ligne</h4>
            <ul className="list-group" id="userList">
              <li className="list-group-item">Utilisateur 1</li>
              <li className="list-group-item">Utilisateur 2</li>
              <li className="list-group-item">Utilisateur 3</li>
            </ul>
          </div>
          <div className="col-md-8">
            <h4>Bienvenue dans la salle de chat</h4>
            <p>
              Rejoignez la salle de chat pour discuter instantanément avec vos
              amis et collègues. Participez à des conversations en groupe ou en
              tête-à-tête, partagez des fichiers et échangez en temps réel.
            </p>
            <h4>Chat</h4>
            <div
              className="border rounded p-3"
              style="height: 300px; overflow-y: scroll"
              id="chatArea"
            >
              <div className="chat-message">
                <strong>Bot:</strong> Bienvenue dans le salon de chat !
              </div>
            </div>
            <form id="chatForm" className="mt-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Écrivez votre message..."
                  required
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default randomchatsalon;
