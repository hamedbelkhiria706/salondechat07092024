import React from "react";
import "./stylescss/global.css";

import "./js/faqs.js";

const faqs = () => {
  return (
    <main>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Foire aux Questions</h1>

        <div className="accordion" id="faqAccordion">
          <div className="card">
            <div className="card-header" id="headingZero">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
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
              className="collapse show"
              aria-labelledby="headingZero"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Oui, notre version de base est entièrement gratuite et vous
                permet de profiter des fonctions essentielles de chat.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
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
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Il suffit de vous connecter à votre compte, de visiter la page
                des tarifs et de sélectionner l’abonnement Pro.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
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
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Absolument. Tous les messages sont chiffrés de bout en bout pour
                garantir la confidentialité de vos conversations.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
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
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Oui, vous pouvez vous connecter à votre compte sur plusieurs
                appareils, que ce soit un ordinateur ou un mobile.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
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
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Dans la version gratuite, vous pouvez partager des fichiers
                jusqu'à 5 Mo. Avec le plan Pro, cette limite est portée à 100
                Mo.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingFive">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
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
              className="collapse"
              aria-labelledby="headingFive"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Pour rejoindre un salon de chat, connectez-vous à votre compte
                et sélectionnez un salon dans la liste des salons disponibles.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingSix">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
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
              className="collapse"
              aria-labelledby="headingSix"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Oui, vous pouvez créer votre propre salon de chat en cliquant
                sur le bouton "Créer un salon" dans votre tableau de bord.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingSeven">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
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
              className="collapse"
              aria-labelledby="headingSeven"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Pour signaler un utilisateur, cliquez sur son nom dans le salon
                et sélectionnez l'option "Signaler" dans le menu déroulant.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingEight">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
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
              className="collapse"
              aria-labelledby="headingEight"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Nous proposons divers salons, y compris des salons de discussion
                générale, des salons thématiques, et des salons privés.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default faqs;
