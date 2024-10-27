import React from "react";
import "./stylescss/global.css";

import $ from "jquery";
import "./js/plugins.js";
const plugins = () => {
  <main>
    <div class="container mt-5">
      <h1>Plugins</h1>
      <p>Gérez vos plugins ici.</p>
      <ul>
        <li>
          Plugin 1 <button class="btn btn-danger btn-sm">Désactiver</button>
        </li>
        <li>
          Plugin 2 <button class="btn btn-danger btn-sm">Désactiver</button>
        </li>
      </ul>
      <a href="profile.html" class="btn btn-secondary mt-3">
        Retour au profil
      </a>
      <script src="js/plugins.js"></script>
    </div>
  </main>;
};
export default plugins;
