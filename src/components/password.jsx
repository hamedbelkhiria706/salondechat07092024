import React from "react";
 
import { Link } from "react-router-dom";
import { useState } from "react";

const Password = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [isNewPasswordPolicyValid, setIsNewPasswordPolicyValid] = useState(false);
  const [newPasswordPolicyError, setNewPasswordPolicyError] = useState("");
  const [passwordMismatchError, setPasswordMismatchError] = useState("");

  const validateNewPasswordPolicy = (passwordValue) => {
    if (!passwordValue) {
      setIsNewPasswordPolicyValid(false);
      setNewPasswordPolicyError(""); // No error if empty, 'required' handles it
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (passwordRegex.test(passwordValue)) {
      setIsNewPasswordPolicyValid(true);
      setNewPasswordPolicyError("");
    } else {
      setIsNewPasswordPolicyValid(false);
      setNewPasswordPolicyError(
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial."
      );
    }
  };

  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    validateNewPasswordPolicy(value);
    if (confirmNewPassword) {
      if (value !== confirmNewPassword) {
        setPasswordMismatchError("Les mots de passe ne correspondent pas.");
      } else {
        setPasswordMismatchError("");
      }
    }
  };

  const handleConfirmNewPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmNewPassword(value);
    if (newPassword !== value && value) {
      setPasswordMismatchError("Les mots de passe ne correspondent pas.");
    } else {
      setPasswordMismatchError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setPasswordMismatchError("Les mots de passe ne correspondent pas.");
      return;
    }
    if (!isNewPasswordPolicyValid) {
      // This should ideally be caught by button's disabled state
      setNewPasswordPolicyError("Le nouveau mot de passe n'est pas valide.");
      return;
    }

    // Placeholder for actual password change logic (e.g., API call)
    console.log("API Call: Change password for user");
    console.log("Current Password:", currentPassword);
    console.log("New Password:", newPassword);

    alert("Mot de passe changé avec succès !"); // Replace with better UI feedback

    // Reset form fields and errors
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setIsNewPasswordPolicyValid(false);
    setNewPasswordPolicyError("");
    setPasswordMismatchError("");
  };

  const isSubmitDisabled =
    !currentPassword ||
    !newPassword ||
    !confirmNewPassword ||
    !isNewPasswordPolicyValid ||
    !!passwordMismatchError;

  return (
    <main>
      <div className="container mt-5">
        <h1>Modifier le Mot de Passe</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="current-password">Mot de passe actuel</label>
            <input
              type="password"
              className="form-control"
              id="current-password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Entrez votre mot de passe actuel"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">Nouveau mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="new-password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              placeholder="Entrez un nouveau mot de passe"
              required
              style={{
                borderColor: newPassword
                  ? isNewPasswordPolicyValid
                    ? "green"
                    : "red"
                  : undefined,
              }}
            />
            {newPasswordPolicyError && newPassword && (
              <p style={{ color: "red" }}>{newPasswordPolicyError}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">
              Confirmer le nouveau mot de passe
            </label>
            <input
              type="password"
              className="form-control"  
              id="confirm-password"
              value={confirmNewPassword}
              onChange={handleConfirmNewPasswordChange}
              placeholder="Confirmez le nouveau mot de passe"
              required
              style={{
                borderColor:
                  confirmNewPassword && passwordMismatchError ? "red" : undefined,
              }}
            />
            {passwordMismatchError && confirmNewPassword && (
              <p style={{ color: "red" }}>{passwordMismatchError}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="btn btn-primary"
          >
            Mettre à jour le mot de passe
          </button>
        </form>
        <Link to="/profile" className="btn btn-secondary mt-3">
          Retour au profil
        </Link>
        <Link to="/editprofile" className="btn btn-info mt-3 ml-2" style={{marginLeft: '0.5rem'}}>
          Changer profile
        </Link>
      </div>
    </main>
  );
};
export default Password;
