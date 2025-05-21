import React, { useState } from "react"; // Import useState

import {Link} from 'react-router-dom'

const Notifications = () => {
  // State to manage checkbox values
  const [emailNotifications, setEmailNotifications] = useState(true); // Initial state, matches 'checked'
  const [smsNotifications, setSmsNotifications] = useState(false); // Initial state

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form reload

    // Here you would typically send the notification settings to your backend
    console.log("Saving notification settings:", {
      email: emailNotifications,
      sms: smsNotifications,
    });

    // Add logic to save settings (e.g., API call)
    alert("Paramètres sauvegardés ! (Simulation)"); // Simple feedback
  };

  return (

    <main>
      <div className="container mt-5">
        <h1>Notifications</h1>
        <p>Gérez vos paramètres de notification ici.</p>
        
          <div className="form-check">
        {/* Add onSubmit handler to the form */}
        <form onSubmit={handleSubmit}>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="email-notifications"
              // Bind checked state to component state
              checked={emailNotifications}
              // Add onChange handler to update state
              onChange={(e) => setEmailNotifications(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="email-notifications"> {/* Use htmlFor in JSX */}
              Recevoir des notifications par email
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="sms-notifications"
              // Bind checked state to component state
              checked={smsNotifications}
              // Add onChange handler to update state
              onChange={(e) => setSmsNotifications(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="sms-notifications"> {/* Use htmlFor in JSX */}
              Recevoir des notifications par SMS
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Sauvegarder les paramètres
          </button>
        </form>
        <Link to="/user/userid/profile" className="btn btn-secondary mt-3">
          Retour au profil
        {/* Note: The /user/userid/profile link uses a static 'userid'.
            In a real app, this should be dynamic based on the logged-in user. */}
        </Link>
      </div>
      </div>
   
    </main>
  );
};
export default Notifications;
