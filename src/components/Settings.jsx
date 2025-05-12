import React, { useState } from 'react';

function Settings() {
  // États pour les champs de formulaire (exemples)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de soumission du formulaire
    // Par exemple, vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    console.log('Paramètres sauvegardés:', { username, email, notificationsEnabled });
    // Ici, vous appelleriez une API pour sauvegarder les données
  };

  return (
    <div className="container mt-5">
      <h1>Paramètres du compte</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        {/* Section Profil */}
        <section className="mb-4">
          <h2>Profil</h2>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Entrez votre nom d'utilisateur"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Adresse e-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre adresse e-mail"
            />
          </div>
        </section>

        {/* Section Sécurité */}
        <section className="mb-4">
          <h2>Sécurité</h2>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Nouveau mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Laissez vide pour ne pas changer"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirmer le nouveau mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmez le nouveau mot de passe"
            />
          </div>
        </section>

        {/* Section Notifications */}
        <section className="mb-4">
          <h2>Notifications</h2>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="notificationsEnabled"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="notificationsEnabled">
              Activer les notifications par e-mail
            </label>
          </div>
        </section>

        <button type="submit" className="btn btn-primary">Sauvegarder les modifications</button>
      </form>
    </div>
  );
}

export default Settings;