import React from "react";
import PricingCard from "../components/PricingCard";

function Plans() {
  return (
    <section id="pricing" className="py-5  ">
      <div className="container">
        <h2 className="text-center mb-4">Plans Tarifaires</h2>
        <div className="row">
          {/* Note: Le composant PricingCard devrait être mis à jour pour gérer 'features' comme un tableau (array) */}
          <PricingCard
            plan="Plan Gratuit"
            price="0€ / mois"
            description="Idéal pour commencer et découvrir les fonctionnalités de base."
            features={[
              "1 salon de discussion",
              "Fonctionnalités de chat de base",
              "Support communautaire"
            ]}
            buttonText="Choisir"
            // Potentielle action: onClick={() => handlePlanSelection('gratuit')}
          />
          <PricingCard
            plan="Plan Premium"
            price="15€ / mois"
            description="Pour les utilisateurs souhaitant plus de flexibilité et de support."
            features={[
              "Jusqu'à 3 salons de discussion",
              "Personnalisation avancée de l'interface",
              "Support prioritaire par email",
              "Historique des messages étendu"
            ]}
            buttonText="Choisir"
          />
          <PricingCard
            plan="Plan Pro"
            price="30€ / mois"
            description="Parfait pour les professionnels et les petites équipes nécessitant des outils avancés."
            features={[
              "Jusqu'à 5 salons de discussion",
              "Analyses et statistiques de base",
              "Personnalisation du thème",
              "Support amélioré"
            ]}
            buttonText="Choisir"
          />
          <PricingCard
            plan="Plan Entreprise"
            price="50€ / mois"
            description="Solution complète pour les grandes organisations avec des besoins spécifiques."
            features={[
              "Salons de discussion illimités",
              "Intégration API et webhooks",
              "Support dédié 24/7",
              "Fonctionnalités de sécurité avancées (SSO, etc.)",
              "Analyses et rapports complets"
            ]}
            buttonText="Choisir"
          />
        </div>
      </div>
    </section>
  );
}

export default Plans;
