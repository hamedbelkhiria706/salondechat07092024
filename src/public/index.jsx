import React from "react";
import "./stylescss/global.css";
import "./stylescss/decorationacceuil.css";

import "./js/faqs.js";

import Footer from "./footer";
const index = () => {
  return (
    <main>
      {/* Jumbotron Section */}

      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4">Bienvenue sur Notre Application de Chat</h1>
          <p className="lead">
            Discutez en toute simplicité avec vos amis, collègues et proches, où
            que vous soyez !
          </p>
          <a href="#" className="btn btn-primary btn-lg mt-4">
            Commencez à Chatter
          </a>
        </div>
      </div>

      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Nos Fonctionnalités</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Gestion des Amis</h5>
                  <p className="card-text">
                    Ajoutez, modifiez et supprimez vos amis rapidement et
                    facilement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Personnalisation</h5>
                  <p className="card-text">
                    Personnalisez votre profil et vos préférences selon vos
                    goûts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Notifications</h5>
                  <p className="card-text">
                    Recevez des notifications en temps réel de toutes vos
                    conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Plans Tarifaires</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center mb-4">
                <div className="card-header">Plan Gratuit</div>
                <div className="card-body">
                  <h5 className="card-title">0€ / mois</h5>
                  <p className="card-text">
                    Chat illimité, support limité, etc.
                  </p>
                  <p className="card-text">Un salon gratuit</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-outline-primary">
                    Choisir
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-4">
                <div className="card-header">Plan Premium</div>
                <div className="card-body">
                  <h5 className="card-title">15€ / mois</h5>
                  <p className="card-text">
                    Chat illimité, personnalisation avancée, support
                    prioritaire.
                  </p>
                  <p className="card-text">3 salons gratuits</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-outline-primary">
                    Choisir
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center mb-4">
                <div className="card-header">Plan Entreprise</div>
                <div className="card-body">
                  <h5 className="card-title">50€ / mois</h5>
                  <p className="card-text">
                    Chat sécurisé, intégration API, support dédié.
                  </p>
                  <p className="card-text">9 salons gratuits</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-outline-primary">
                    Choisir
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Témoignages</h2>
          <div className="row">
            <div className="col-md-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  "Une application formidable, je ne peux plus m'en passer !"
                </p>
                <footer className="blockquote-footer">Alice D.</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  "Service impeccable, interface intuitive et fluide."
                </p>
                <footer className="blockquote-footer">Bernard P.</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  "Je recommande à tous ceux qui veulent un chat rapide et
                  sécurisé."
                </p>
                <footer className="blockquote-footer">Claire M.</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">FAQ</h2>
          <div className="accordion" id="faqAccordion">
            <div className="card">
              <div className="card-header" id="faqHeadingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link"
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
                className="collapse show"
                aria-labelledby="faqHeadingOne"
                data-parent="#faqAccordion"
              >
                <div className="card-body">
                  L'inscription est simple. Cliquez sur le bouton "S'inscrire"
                  en haut à droite et suivez les instructions.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="faqHeadingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
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
                className="collapse"
                aria-labelledby="faqHeadingTwo"
                data-parent="#faqAccordion"
              >
                <div className="card-body">
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
