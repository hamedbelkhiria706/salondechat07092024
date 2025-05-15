import React from 'react';
import { Link, useParams } from "react-router-dom";

// It's good practice for the component name to match the filename.
function UserProfile() {
  // If the userId is part of the route, you can get it using useParams
  // e.g., if your route is /user/:userId/profile
  // const { userId } = useParams();

  // For now, let's assume userId is available, similar to UserDashboard
  // This should ideally come from auth context, props, or route params
  const userId = "currentUserId"; // Replace with actual dynamic user ID logic

  return (
    <main>
      <div className="container mt-5">
        <h1>Profil Utilisateur</h1>
        {/* Use the dynamic userId in the links */}
        <Link to={`/user/${userId}/exportdata`} className="btn btn-secondary mt-3 d-block">Exporter les données</Link>
        <Link to={`/user/${userId}/editprofile`} className="btn btn-secondary mt-3 d-block">
          Éditer le profil
        </Link>
        {/* Assuming the password change is not user-specific in the URL or handled differently */}
        <Link to="/password" className="btn btn-secondary mt-3 d-block">
          Changer le mot de passe
        </Link>
      </div>
    </main>
  );
}
export default UserProfile;