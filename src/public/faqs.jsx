import React from "react";
import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
import "./stylescss/global.css";
import $ from "jquery";
import "./js/faqs.js";
import Footer from "./footer";
const faqs = () => {
  return (
    <main>
      <div id="content"></div>

      <div class="container mt-5">
        <h1 class="text-center mb-4">Foire aux Questions</h1>

        <div class="accordion" id="faqAccordion">
          <div class="card">
            <div class="card-header" id="headingZero">
              <h2 class="mb-0">
                <button
                  class="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseZero"
                  aria-expanded="true"
                  aria-controls="collapseZero"
                >
                  1. Est-il gratuit ?
                </button>
              </h2>
            </div>
            <div
              id="collapseZero"
              class="collapse show"
              aria-labelledby="headingZero"
              data-parent="#faqAccordion"
            >
              <div class="card-body">
                Oui, notre version de base est entièrement gratuite et vous
                permet de profiter des fonctions essentielles de chat.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  2. Comment puis-je passer à la version Pro ?
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              class="collapse"
              aria-labelledby="headingOne"
              data-parent="#faqAccordion"
            >
              <div class="card-body">
                Il suffit de vous connecter à votre compte, de visiter la page
                des tarifs et de sélectionner l’abonnement Pro.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  3. Mes messages sont-ils sécurisés ?
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#faqAccordion"
            >
              <div class="card-body">
                Absolument. Tous les messages sont chiffrés de bout en bout pour
                garantir la confidentialité de vos conversations.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  4. Puis-je utiliser sur plusieurs appareils ?
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#faqAccordion"
            >
              <div class="card-body">
                Oui, vous pouvez vous connecter à votre compte sur plusieurs
                appareils, que ce soit un ordinateur ou un mobile.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFour">
              <h2 class="mb-0">
                <button
                  class="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  5. Quelle est la limite de partage de fichiers ?
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingFour"
              data-parent="#faqAccordion"
            >
              <div class="card-body">
                Dans la version gratuite, vous pouvez partager des fichiers
                jusqu'à 5 Mo. Avec le plan Pro, cette limite est portée à 100
                Mo.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFive">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  6. Comment rejoindre un salon de chat ?
                </button>
              </h2>
            </div>
            <div
              id="collapseFive"
              class="collapse"
              aria-labelledby="headingFive"
              data-parent="#faqAccordion"
            >
              <div class="card-body">
                Pour rejoindre un salon de chat, connectez-vous à votre compte
                et sélectionnez un salon dans la liste des salons disponibles.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingSix">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  7. Puis-je créer mon propre salon de chat ?
                </button>
              </h2>
            </div>
            <div
              id="collapseSix"
              class="collapse"
              aria-labelledby="headingSix"
              data-parent="#faqAccordion"
            >
              <div class="card-body">
                Oui, vous pouvez créer votre propre salon de chat en cliquant
                sur le bouton "Créer un salon" dans votre tableau de bord.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingSeven">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  8. Comment signaler un utilisateur ?
                </button>
              </h2>
            </div>
            <div
              id="collapseSeven"
              class="collapse"
              aria-labelledby="headingSeven"
              data-parent="#faqAccordion"
            >
              <div class="card-body">
                Pour signaler un utilisateur, cliquez sur son nom dans le salon
                et sélectionnez l'option "Signaler" dans le menu déroulant.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingEight">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  9. Quels types de salons sont disponibles ?
                </button>
              </h2>
            </div>
            <div
              id="collapseEight"
              class="collapse"
              aria-labelledby="headingEight"
              data-parent="#faqAccordion"
            >
              <div class="card-body">
                Nous proposons divers salons, y compris des salons de discussion
                générale, des salons thématiques, et des salons privés.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default faqs;
