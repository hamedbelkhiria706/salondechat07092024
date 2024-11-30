import React from "react";
import "../styles/global.css";
import {Link} from 'react-router-dom'
const exportdata = () => {
  return (
    <main>
      

      <div className="container mt-5">
        <h1>Exporter les Données</h1>
        <p>Cliquez ci-dessous pour exporter vos données.</p>
        <button onClick={()=>{alert('données exportés csv')}} className="btn btn-primary">
          Exporter mes données
        </button>
        <Link to="/profile" className="btn btn-secondary mt-3">
          Retour au profil
        </Link>
      </div>
    </main>
  );
};

export default exportdata;
