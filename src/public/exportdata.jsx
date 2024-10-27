import React from "react";
import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
import "./stylescss/global.css";

import $ from "jquery";
 
import "./js/exportdata.js";
import Footer from "./footer";
const exportdata = () => {
  return (
    <main>
      <div id="content"></div>

      <div class="container mt-5">
        <h1>Exporter les Données</h1>
        <p>Cliquez ci-dessous pour exporter vos données.</p>
        <a href="#" class="btn btn-primary">
          Exporter mes données
        </a>
        <a href="profile.html" class="btn btn-secondary mt-3">
          Retour au profil
        </a>
      </div>
      <Footer />
    </main>
  );
};

export default exportdata;
