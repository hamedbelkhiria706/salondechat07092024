import React from "react";
import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
import "./stylescss/global.css";
import "./stylescss/chatstyle.css";
import $ from "jquery";

import "./js/chat.js";

const Chat = () => {
  return (
    <main className="mt-5">
      <h1 className="text-center mb-4">Chat</h1>
      <div className="chat-container p-3">
        <div className="alert alert-warning notification" role="alert">
          Le chat est GRATUIT et le restera toujours ! Commencez à discuter en
          choisissant une personne dans la liste !
        </div>
        <div className="row">
          {/* User List */}
          <div className="col-12 col-md-4 user-list p-0">
            <h4>Utilisateurs En Ligne</h4>
            <ul className="list-group">
              {[
                "Utilisateur 1",
                "Utilisateur 2",
                "Utilisateur 3",
                "Utilisateur 4",
              ].map((user) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={user}
                >
                  {user}
                  <button className="btn btn-danger btn-sm">Bloquer</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat Area */}
          <div className="col-12 col-md-8 chat-area">
            <h4>Zone de Chat</h4>
            <div className="border p-2" id="chatMessages">
              <div className="message">
                <strong>Utilisateur 1 :</strong> Bonjour !
              </div>
              <div className="message">
                <strong>Vous :</strong> Salut !
              </div>
              <div className="message">
                <strong>Utilisateur 2 :</strong> Comment ça va ?
              </div>
            </div>
            <div id="typingIndicator" style={{ display: "none" }}>
              Un utilisateur est en train d'écrire...
            </div>
            <div
              className="alert alert-danger"
              id="errorMessage"
              style={{ display: "none" }}
              role="alert"
            >
              Votre message contient des mots inappropriés et ne peut pas être
              envoyé.
            </div>
            <form className="mt-3" id="chatForm">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tapez un message..."
                  required
                  id="messageInput"
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
        <div className="alert alert-info mt-3" role="alert">
          Note : Utilisez le bouton Bloquer pour garder le chat propre.
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Chat;
