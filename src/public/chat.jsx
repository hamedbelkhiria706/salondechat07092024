import React from "react";

import "./stylescss/global.css";
import "./stylescss/chatstyle.css";

import "./js/chat.js";

const Chat = () => {
  return (
    <main classNameName="mt-5">
      <h1 classNameName="text-center mb-4">Chat</h1>
      <div classNameName="chat-container p-3">
        <div classNameName="alert alert-warning notification" role="alert">
          Le chat est GRATUIT et le restera toujours ! Commencez à discuter en
          choisissant une personne dans la liste !
        </div>
        <div classNameName="row">
          {/* User List */}
          <div classNameName="col-12 col-md-4 user-list p-0">
            <h4>Utilisateurs En Ligne</h4>
            <ul classNameName="list-group">
              {[
                "Utilisateur 1",
                "Utilisateur 2",
                "Utilisateur 3",
                "Utilisateur 4",
              ].map((user) => (
                <li
                  classNameName="list-group-item d-flex justify-content-between align-items-center"
                  key={user}
                >
                  {user}
                  <button classNameName="btn btn-danger btn-sm">Bloquer</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat Area */}
          <div classNameName="col-12 col-md-8 chat-area">
            <h4>Zone de Chat</h4>
            <div classNameName="border p-2" id="chatMessages">
              <div classNameName="message">
                <strong>Utilisateur 1 :</strong> Bonjour !
              </div>
              <div classNameName="message">
                <strong>Vous :</strong> Salut !
              </div>
              <div classNameName="message">
                <strong>Utilisateur 2 :</strong> Comment ça va ?
              </div>
            </div>
            <div id="typingIndicator" style={{ display: "none" }}>
              Un utilisateur est en train d'écrire...
            </div>
            <div
              classNameName="alert alert-danger"
              id="errorMessage"
              style={{ display: "none" }}
              role="alert"
            >
              Votre message contient des mots inappropriés et ne peut pas être
              envoyé.
            </div>
            <form classNameName="mt-3" id="chatForm">
              <div classNameName="input-group">
                <input
                  type="text"
                  classNameName="form-control"
                  placeholder="Tapez un message..."
                  required
                  id="messageInput"
                />
                <div classNameName="input-group-append">
                  <button classNameName="btn btn-primary" type="submit">
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div classNameName="alert alert-info mt-3" role="alert">
          Note : Utilisez le bouton Bloquer pour garder le chat propre.
        </div>
      </div>
    </main>
  );
};

export default Chat;
