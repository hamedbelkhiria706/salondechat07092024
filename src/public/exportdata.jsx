import React from "react";
import "./stylescss/global.css";

import $ from "jquery";

import "./js/exportdata.js";
import Footer from "./footer";
const exportdata = () => {
  return (
    <main>
      <div id="content"></div>

      <div className="container mt-5">
        <h1>Exporter les Données</h1>
        <p>Cliquez ci-dessous pour exporter vos données.</p>
        <a href="#" className="btn btn-primary">
          Exporter mes données
        </a>
        <a href="profile.html" className="btn btn-secondary mt-3">
          Retour au profil
        </a>
      </div>
      <Footer />
    </main>
  );
};

export default exportdata;
