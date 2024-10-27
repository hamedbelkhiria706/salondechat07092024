import React from "react";
import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
import "./stylescss/global.css";
import $ from "jquery";

const footer = () => {
  return (
    <footer class="bg-dark text-white mt-5 p-4 text-center">
      <p>
        &copy; 2024 Application de Chat en Temps Réel | Tous droits réservés.
      </p>
      <p>
        <a href="politique.html" class="text-white">
          Politique de confidentialité
        </a>
        |{" "}
        <a href="mentions.html" class="text-white">
          Mentions légales
        </a>{" "}
        |
        <a href="about.html" class="text-white">
          Contactez-nous
        </a>
      </p>
    </footer>
  );
};
export default footer;
