import React from "react";
import "./stylescss/global.css";

import "./js/randomchatsalon.js";
const randomchatsalon = () => {
  return (
    <main>
      <div class="container mt-5">
        <h1 class="text-center mb-4" id="chatRoomName">
          Salon de Chat
        </h1>

        <div class="row">
          <div class="col-md-4">
            <h4>Utilisateurs en ligne</h4>
            <ul class="list-group" id="userList">
              <li class="list-group-item">Utilisateur 1</li>
              <li class="list-group-item">Utilisateur 2</li>
              <li class="list-group-item">Utilisateur 3</li>
            </ul>
          </div>
          <div class="col-md-8">
            <h4>Bienvenue dans la salle de chat</h4>
            <p>
              Rejoignez la salle de chat pour discuter instantanément avec vos
              amis et collègues. Participez à des conversations en groupe ou en
              tête-à-tête, partagez des fichiers et échangez en temps réel.
            </p>
            <h4>Chat</h4>
            <div
              class="border rounded p-3"
              style="height: 300px; overflow-y: scroll"
              id="chatArea"
            >
              <div class="chat-message">
                <strong>Bot:</strong> Bienvenue dans le salon de chat !
              </div>
            </div>
            <form id="chatForm" class="mt-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Écrivez votre message..."
                  required
                />
                <div class="input-group-append">
                  <button class="btn btn-primary" type="submit">
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
