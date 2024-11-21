import React from "react";
import { useState } from "react";
// import FAQItem from "../components/FAQItem";
import "../styles/global.css";
import "../styles/decorationacceuil.css";

const ContactPage = () => {
  const [nom, setNom] = useState("");
  const [email,setEmail]=useState("");
  const [subject,setSubject]=useState("");
  const handleNameChange = (e) => {
    setNom(e.target.value);
    console.log(nom);
  };
  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }
  const handleSubjectChange=(e)=>{
    setSubject(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom) {
      console.log("Entrer votre nom");
    }
    if(!email){
      console.log("Entrer votre email");
    }
  };
  return (
    <main>
      <header className="mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row no-gutters mb-5">
                <div className="col">
                  <div className="w-100 p-md-5 p-4">
                    <h1 className="mb-4">Contact Us</h1>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form
                      method="POST"
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                      noValidate="novalidate"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" htmlFor="name">
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                              required
                              pattern="[A-Za-zÀ-ÿ ']+"
                              title="Please enter a valid name (letters and spaces only)."
                              onChange={handleNameChange}
                            />
                            <div className="invalid-feedback">
                              Please provide a valid name.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" htmlFor="email">
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                              onChange={handleEmailChange}
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter a valid email address.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="subject">
                              Subject
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              required
                              onChange={handleSubjectChange}
                            />
                            <div className="invalid-feedback">
                              Please provide a subject.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="message">
                              Message
                            </label>
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder="Message"
                              required
                            ></textarea>
                            <div className="invalid-feedback">
                              Please enter a message.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary"
                            />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
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
                    <div className="row">
                      <div className="col-md-3">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-map-marker"></span>
                          </div>
                          <div className="text">
                            <p>
                              <span>Address:</span> 198 West 21th Street, Suite
                              721 New York NY 10016
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-phone"></span>
                          </div>
                          <div className="text">
                            <p>
                              <span>Phone:</span>
                              <a href="tel://1234567920">+ 1235 2355 98</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-paper-plane"></span>
                          </div>
                          <div className="text">
                            <p>
                              <span>Email:</span>
                              <a href="mailto:info@yoursite.com">
                                info@yoursite.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-globe"></span>
                          </div>
                          <div className="text">
                            <p>
                              <span>Website</span> <a href="#">yoursite.com</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
};

export default ContactPage;
