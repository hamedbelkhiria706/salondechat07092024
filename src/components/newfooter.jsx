import React from "react";
import "../styles/global.css";
import {Link} from 'react-router-dom'
const footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <p>
        &copy; 2024 Application de Chat en Temps Réel | Tous droits réservés.
      </p>
      <p>
        <Link to="/politiquedeconfidentialite" className="text-white">
          Politique de confidentialité
        </Link>
        |{" "}
        <Link to="/mentionslegales" className="text-white">
          Mentions légales
        </Link>{" "}
        |
        <Link to="/contact" className="text-white">
          Contactez-nous
        </Link>
      </p>
    </footer>
  );
};
export default footer;
