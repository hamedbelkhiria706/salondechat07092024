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

      <section id="pricing" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Plans Tarifaires</h2>
          <div className="row">
            <PricingCard
              plan="Plan Gratuit"
              price="0€ / mois"
              description="Chat illimité, support limité, etc."
              features="Un salon gratuit"
              buttonText="Choisir"
            />
            <PricingCard
              plan="Plan Premium"
              price="15€ / mois"
              description="Chat illimité, personnalisation avancée, support prioritaire."
              features="3 salons gratuits"
              buttonText="Choisir"
            />
            <PricingCard
              plan="Plan Entreprise"
              price="50€ / mois"
              description="Chat sécurisé, intégration API, support dédié."
              features="9 salons gratuits"
              buttonText="Choisir"
            />
          </div>
        </div>
      </section>

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
