import React from "react";
import PricingCard from "../components/PricingCard";

function Plans() {
  return (
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
  );
}

export default Plans;
