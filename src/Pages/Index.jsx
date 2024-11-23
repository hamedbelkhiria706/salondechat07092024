import React from "react";
import Jumbotron from "../components/Jumbotron";
import FeatureCard from "../components/FeatureCard";
import PricingCard from "../components/PricingCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQItem from "../components/FAQItem";
import "../styles/global.css";
import "../styles/decorationacceuil.css";
 

const HomePage = () => {
  return (
    <main>
      <Jumbotron />
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Nos Fonctionnalités</h2>
          <div className="row">
            <FeatureCard
              title="Gestion des Amis"
              description="Ajoutez, modifiez et supprimez vos amis rapidement et facilement."
            />
            <FeatureCard
              title="Personnalisation"
              description="Personnalisez votre profil et vos préférences selon vos goûts."
            />
            <FeatureCard
              title="Notifications"
              description="Recevez des notifications en temps réel de toutes vos conversations."
            />
          </div>
        </div>
      </section>
      <div className="col-md-7 flex-column">
                      <div className="w-100 p-md-5 p-4">
                        <h2>Qui sommes-nous ?</h2>
                        <p>
                          Notre projet a été fondé avec une mission claire :
                          rendre la communication simple, rapide et accessible à
                          tous. Nous croyons que la communication instantanée
                          devrait être fluide, sécurisée et à la portée de tous.
                        </p>
                        <hr />
                        <h2>Nos valeurs</h2>
                        <ul>
                          <li>
                            <strong>Innovation</strong> : Nous sommes
                            constamment à la recherche de nouvelles façons
                            d'améliorer l’expérience de chat pour nos
                            utilisateurs.
                          </li>
                          <li>
                            <strong>Sécurité</strong> : Protéger les données de
                            nos utilisateurs est notre priorité numéro un.
                          </li>
                          <li>
                            <strong>Accessibilité</strong> : Nous croyons que
                            tout le monde, quelle que soit sa situation, doit
                            avoir accès à des outils de communication puissants
                            et fiables.
                          </li>
                        </ul>
                        <hr />
                        <h2>Notre équipe</h2>
                        <p>
                          Notre équipe est composée de développeurs, designers,
                          et experts en sécurité dédiés à fournir une
                          application de chat qui évolue avec les besoins des
                          utilisateurs. Ensemble, nous avons pour but de faire
                          de [Nom de l’App] la meilleure plateforme de chat
                          disponible.
                        </p>
                        <button className="btn btn-primary">
                          [Rejoignez notre communauté]
                        </button>
                      </div>
                    </div>
      <section id="testimonials" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Témoignages</h2>
          <div className="row">
            <TestimonialCard
              quote="Une application formidable, je ne peux plus m'en passer !"
              author="Alice D."
            />
            <TestimonialCard
              quote="Service impeccable, interface intuitive et fluide."
              author="Bernard P."
            />
            <TestimonialCard
              quote="Je recommande à tous ceux qui veulent un chat rapide et sécurisé."
              author="Claire M."
            />
          </div>
        </div>
      </section>

      <section id="faq" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">FAQ</h2>
          <div className="accordion" id="faqAccordion">
            <FAQItem
              id={1}
              question="Comment puis-je m'inscrire ?"
              answer="L'inscription est simple. Cliquez sur le bouton 'S'inscrire' en haut à droite et suivez les instructions."
            />
            <FAQItem
              id={2}
              question="Est-ce que l'application est sécurisée ?"
              answer="Oui, nous utilisons des technologies de pointe pour garantir la sécurité de vos données et conversations."
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
