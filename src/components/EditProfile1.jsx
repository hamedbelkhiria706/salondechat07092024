import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";

// Supposons que vous ayez un moyen d'obtenir l'ID utilisateur actuel
// Par exemple, depuis le contexte, les props, ou un hook personnalisé.
// Pour cet exemple, nous allons le simuler.
const getCurrentUserId = () => "123"; // Remplacez par votre logique réelle

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
  });

  const userId = getCurrentUserId(); // Obtenir l'ID utilisateur

  // Optionnel: Charger les données existantes du profil au montage du composant
  useEffect(() => {
    // Exemple: Simuler un appel API pour récupérer les données du profil
    // const fetchProfileData = async () => {
    //   // const response = await fetch(`/api/user/${userId}/profile`);
    //   // const data = await response.json();
    //   // setFormData({ firstName: data.firstName, lastName: data.lastName, email: data.email, bio: data.bio });
    // };
    // fetchProfileData();
    // Pour l'exemple, nous allons initialiser avec des valeurs vides ou des placeholders
    setFormData({
      firstName: "Jean", // Valeur pré-remplie exemple
      lastName: "Dupont", // Valeur pré-remplie exemple
      email: "jean.dupont@example.com", // Valeur pré-remplie exemple
      bio: "Développeur passionné.", // Valeur pré-remplie exemple
    });
  }, [userId]); // Exécuter si userId change (si pertinent)

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous enverriez formData à votre backend/API
    console.log("Données du profil soumises :", formData);
    alert("Profil mis à jour avec succès !");
    // Vous pourriez vouloir rediriger l'utilisateur ou réinitialiser le formulaire
    // setFormData({ firstName: "", lastName: "", email: "", bio: "" }); // Pour réinitialiser si besoin
  };

  return (
    <main>
      <div className="container mt-5">
        <h1 className="text-center">Modifier le Profil</h1>
        <div className="row mt-4">
          <div className="col-12 col-md-8 offset-md-2">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Entrez votre prénom"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Nom de Famille</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Entrez votre nom de famille"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Entrez votre adresse email"
                  // Vous pourriez vouloir désactiver ce champ ou le gérer différemment
                  // s'il n'est pas modifiable ou nécessite une vérification spéciale.
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                  className="form-control"
                  id="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  required
                  rows="3"
                  placeholder="Parlez-nous de vous-même"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Enregistrer les Modifications
              </button>
            </form>
            <Link to={`/user/${userId}/profile`} className="btn btn-secondary mt-3">
              Retour au profil
            </Link>
            <br />
            <Link to={`/user/${userId}/password`} className="btn btn-secondary mt-3">
              Changer mot de passe
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditProfile;
