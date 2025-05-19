import React from "react";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQItem from "../components/FAQItem";
 
import QuiSommesNous from "./QuiSommesNous";

const featuresData = [
  {
    id: "feat1",
    title: "Gestion des Amis",
    description: "Ajoutez, modifiez et supprimez vos amis rapidement et facilement.",
  },
  {
    id: "feat2",
    title: "Personnalisation",
    description: "Personnalisez votre profil et vos préférences selon vos goûts.",
  },
  {
    id: "feat3",
    title: "Notifications",
    description: "Recevez des notifications en temps réel de toutes vos conversations.",
  },
  {
    id: "feat4",
    title: "Support Multi-plateforme",
    description: "Utilisez notre application sur votre téléphone, tablette ou ordinateur.",
  },
];

const testimonialsData = [
  {
    id: "testim1",
    quote: "Une application formidable, je ne peux plus m'en passer !",
    author: "Alice D.",
  },
  {
    id: "testim2",
    quote: "Service impeccable, interface intuitive et fluide.",
    author: "Bernard P.",
  },
  {
    id: "testim3",
    quote: "Je recommande à tous ceux qui veulent un chat rapide et sécurisé.",
    author: "Claire M.",
  },
  {
    id: "testim4",
    quote: "Le support client est très réactif et compétent. Bravo !",
    author: "David L.",
  },
];

const faqData = [
  {
    id: 1,
    question: "Comment puis-je m'inscrire ?",
    answer: "L'inscription est simple. Cliquez sur le bouton 'S'inscrire' en haut à droite et suivez les instructions.",
  },
  {
    id: 2,
    question: "Est-ce que l'application est sécurisée ?",
    answer: "Oui, nous utilisons des technologies de pointe pour garantir la sécurité de vos données et conversations.",
  },
  {
    id: 3,
    question: "L'application est-elle compatible avec tous les appareils ?",
    answer: "Notre application est compatible avec la majorité des appareils modernes, y compris iOS, Android et les navigateurs web courants.",
  },
];

const HomePage = () => {
  return (
    <main className="px-4 py-5 m-0"> {/* Correction de la classe CSS */}
      <Hero />
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Nos Fonctionnalités</h2>
          <div className="row">
            {featuresData.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      <QuiSommesNous />
      <section id="testimonials" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Témoignages</h2>
          <div className="row">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">FAQ</h2>
          <div className="accordion" id="faqAccordion">
            {faqData.map((faqItem) => (
              <FAQItem
                key={faqItem.id}
                id={faqItem.id} // L'id est aussi passé en prop car FAQItem l'utilise probablement
                question={faqItem.question}
                answer={faqItem.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
