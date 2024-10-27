import React from "react";
import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
import "./stylescss/global.css";
import "./stylescss/profile.css";
import $ from "jquery";
import "./js/profile.js";
const profile = () => {
  return (
    <main>
      <div class="container mt-5">
        <div class="profile-card text-center">
          <img
            src="assets/CnP_08092024135607-min.png"
            alt="Profile Photo"
            class="profile-photo mb-3"
          />
          <h2>Dr. Anna Jones</h2>
          <h5>Médecin généraliste</h5>
          <div class="star-rating mb-2">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>☆</span> <strong>4.5</strong>
          </div>
          <p>
            <strong>Patients:</strong> 1000+
          </p>
          <h6>A propos</h6>
          <p>
            Le Dr Anna Jones est un médecin généraliste dévoué avec plus de 10
            ans d'expérience. Elle est passionnée par la fourniture de soins de
            santé de qualité et veille à ce que ses patients reçoivent le
            meilleur traitement possible. Le Dr Jones se concentre sur les soins
            préventifs et croit en l'autonomisation de ses patients par des
            connaissances sur leur santé.
          </p>
          <h6>Revues</h6>
          <div class="mb-3">
            <p>
              <strong>Jinny Oslin</strong>
              <span class="star-rating">⭐ ⭐ ⭐ ⭐</span>
              <small>il y'a un jour</small>
            </p>
            <p>
              J'ai récemment consulté le Dr Anna Jones pour un examen de routine
              et j'ai été très impressionnée. Elle est incroyablement compétente
              et a pris le temps de répondre à toutes mes questions. Son
              approche de la médecine est très professionnelle tout en étant
              chaleureuse. Je me suis sentie à l'aise pendant toute la visite,
              et j'apprécie son engagement envers les soins aux patients. Je la
              recommande vivement !
            </p>
          </div>
          <a href="#" class="btn btn-primary">
            Voir tout
          </a>
          <h6 class="mt-4">Hospital</h6>
          <p>
            Care Medical Center
            <br />
            1284 W. Grey St, D1
          </p>
        </div>
        <a href="update_profile.html" class="btn btn-secondary mt-3">
          Modifier le profil
        </a>
      </div>

      <script
        src="https://code.jquery.com/jquery-3.7.1.js"
        integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
        crossorigin="anonymous"
      ></script>
      <script src="js/profile.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </main>
  );
};
export default profile;
