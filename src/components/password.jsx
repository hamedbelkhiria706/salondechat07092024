import React from "react";
import "../styles/global.css";
import {Link} from 'react-router-dom'
const password = () => {
  return (
    <main>
      <div className="container mt-5">
        <h1>Modifier le Mot de Passe</h1>

        <form>
          <div className="form-group">
            <label for="current-password">Mot de passe actuel</label>
            <input
              type="password"
              className="form-control"
              id="current-password"
              placeholder="Entrez votre mot de passe actuel"
              required
            />
          </div>
          <div className="form-group">
            <label for="new-password">Nouveau mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="new-password"
              placeholder="Entrez un nouveau mot de passe"
              required
            />
          </div>
          <div className="form-group">
            <label for="confirm-password">
              Confirmer le nouveau mot de passe
            </label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              placeholder="Confirmez le nouveau mot de passe"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Mettre à jour le mot de passe
          </button>
        </form>
        <Link to="/profile" className="btn btn-secondary mt-3">
          Retour au profil
        </Link>
        
        <Link to="/editprofile" className="btn btn-secondary mt-3">
          Changer profile
        </Link>
      </div>
    </main>
  );
};
export default password;
