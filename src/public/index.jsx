import React from "react";
import "./stylescss/global.css";
import "./stylescss/decorationacceuil.css";
import $ from "jquery";
import "./js/faqs.js";

import Footer from "./footer";
const index = () => {
  return (
    <main>
      <div id="content"></div>

      {/* Jumbotron Section */}

      <div class="jumbotron jumbotron-fluid text-center">
        <div class="container">
          <h1 class="display-4">Bienvenue sur Notre Application de Chat</h1>
          <p class="lead">
            Discutez en toute simplicité avec vos amis, collègues et proches, où
            que vous soyez !
          </p>
          <a href="#" class="btn btn-primary btn-lg mt-4">
            Commencez à Chatter
          </a>
        </div>
      </div>

      <section id="features" class="py-5">
        <div class="container">
          <h2 class="text-center mb-4">Nos Fonctionnalités</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title">Gestion des Amis</h5>
                  <p class="card-text">
                    Ajoutez, modifiez et supprimez vos amis rapidement et
                    facilement.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title">Personnalisation</h5>
                  <p class="card-text">
                    Personnalisez votre profil et vos préférences selon vos
                    goûts.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title">Notifications</h5>
                  <p class="card-text">
                    Recevez des notifications en temps réel de toutes vos
                    conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" class="py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-4">Plans Tarifaires</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="card text-center mb-4">
                <div class="card-header">Plan Gratuit</div>
                <div class="card-body">
                  <h5 class="card-title">0€ / mois</h5>
                  <p class="card-text">Chat illimité, support limité, etc.</p>
                  <p class="card-text">Un salon gratuit</p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-outline-primary">
                    Choisir
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center mb-4">
                <div class="card-header">Plan Premium</div>
                <div class="card-body">
                  <h5 class="card-title">15€ / mois</h5>
                  <p class="card-text">
                    Chat illimité, personnalisation avancée, support
                    prioritaire.
                  </p>
                  <p class="card-text">3 salons gratuits</p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-outline-primary">
                    Choisir
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-center mb-4">
                <div class="card-header">Plan Entreprise</div>
                <div class="card-body">
                  <h5 class="card-title">50€ / mois</h5>
                  <p class="card-text">
                    Chat sécurisé, intégration API, support dédié.
                  </p>
                  <p class="card-text">9 salons gratuits</p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-outline-primary">
                    Choisir
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" class="py-5">
        <div class="container">
          <h2 class="text-center mb-4">Témoignages</h2>
          <div class="row">
            <div class="col-md-4">
              <blockquote class="blockquote text-center">
                <p class="mb-0">
                  "Une application formidable, je ne peux plus m'en passer !"
                </p>
                <footer class="blockquote-footer">Alice D.</footer>
              </blockquote>
            </div>
            <div class="col-md-4">
              <blockquote class="blockquote text-center">
                <p class="mb-0">
                  "Service impeccable, interface intuitive et fluide."
                </p>
                <footer class="blockquote-footer">Bernard P.</footer>
              </blockquote>
            </div>
            <div class="col-md-4">
              <blockquote class="blockquote text-center">
                <p class="mb-0">
                  "Je recommande à tous ceux qui veulent un chat rapide et
                  sécurisé."
                </p>
                <footer class="blockquote-footer">Claire M.</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" class="py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-4">FAQ</h2>
          <div class="accordion" id="faqAccordion">
            <div class="card">
              <div class="card-header" id="faqHeadingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#faqCollapseOne"
                    aria-expanded="true"
                    aria-controls="faqCollapseOne"
                  >
                    Comment puis-je m'inscrire ?
                  </button>
                </h2>
              </div>
              <div
                id="faqCollapseOne"
                class="collapse show"
                aria-labelledby="faqHeadingOne"
                data-parent="#faqAccordion"
              >
                <div class="card-body">
                  L'inscription est simple. Cliquez sur le bouton "S'inscrire"
                  en haut à droite et suivez les instructions.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="faqHeadingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#faqCollapseTwo"
                    aria-expanded="false"
                    aria-controls="faqCollapseTwo"
                  >
                    Est-ce que l'application est sécurisée ?
                  </button>
                </h2>
              </div>
              <div
                id="faqCollapseTwo"
                class="collapse"
                aria-labelledby="faqHeadingTwo"
                data-parent="#faqAccordion"
              >
                <div class="card-body">
                  Oui, nous utilisons des technologies de pointe pour garantir
                  la sécurité de vos données et conversations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default index;
