import React from "react";
import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
import "./stylescss/global.css";

import $ from "jquery";

import "./js/about.js";

const about = () => {
  return (
    <main>
      <header class="mt-5">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="wrapper">
              <div class="row no-gutters mb-5">
                <div class="col-md-5">
                  <div class="w-100 p-md-5 p-4">
                    <h1 class="mb-4">Contact Us</h1>
                    <div
                      id="form-message-warning"
                      class="mb-4"
                      style="display: none"
                    ></div>
                    <div
                      id="form-message-success"
                      class="mb-4"
                      style="display: none"
                    >
                      Your message was sent, thank you!
                    </div>
                    <form
                      method="POST"
                      id="contactForm"
                      name="contactForm"
                      class="contactForm"
                      novalidate="novalidate"
                    >
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="label" for="name">
                              Full Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                              required
                              pattern="[A-Za-zÀ-ÿ ']+"
                              title="Please enter a valid name (letters and spaces only)."
                            />
                            <div class="invalid-feedback">
                              Please provide a valid name.
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="label" for="email">
                              Email Address
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                              required
                            />
                            <div class="invalid-feedback">
                              Please enter a valid email address.
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="label" for="subject">
                              Subject
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              required
                            />
                            <div class="invalid-feedback">
                              Please provide a subject.
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="label" for="message">
                              Message
                            </label>
                            <textarea
                              name="message"
                              class="form-control"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder="Message"
                              required
                            ></textarea>
                            <div class="invalid-feedback">
                              Please enter a message.
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              class="btn btn-primary"
                            />
                            <div class="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-7 flex-column">
                  <div class="w-100 p-md-5 p-4">
                    <h2>Qui sommes-nous ?</h2>
                    <p>
                      Notre projet a été fondé avec une mission claire : rendre
                      la communication simple, rapide et accessible à tous. Nous
                      croyons que la communication instantanée devrait être
                      fluide, sécurisée et à la portée de tous.
                    </p>
                    <hr />
                    <h2>Nos valeurs</h2>
                    <ul>
                      <li>
                        <strong>Innovation</strong> : Nous sommes constamment à
                        la recherche de nouvelles façons d'améliorer
                        l’expérience de chat pour nos utilisateurs.
                      </li>
                      <li>
                        <strong>Sécurité</strong> : Protéger les données de nos
                        utilisateurs est notre priorité numéro un.
                      </li>
                      <li>
                        <strong>Accessibilité</strong> : Nous croyons que tout
                        le monde, quelle que soit sa situation, doit avoir accès
                        à des outils de communication puissants et fiables.
                      </li>
                    </ul>
                    <hr />
                    <h2>Notre équipe</h2>
                    <p>
                      Notre équipe est composée de développeurs, designers, et
                      experts en sécurité dédiés à fournir une application de
                      chat qui évolue avec les besoins des utilisateurs.
                      Ensemble, nous avons pour but de faire de [Nom de l’App]
                      la meilleure plateforme de chat disponible.
                    </p>
                    <button class="btn btn-primary">
                      [Rejoignez notre communauté]
                    </button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-map-marker"></span>
                      </div>
                      <div class="text">
                        <p>
                          <span>Address:</span> 198 West 21th Street, Suite 721
                          New York NY 10016
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-phone"></span>
                      </div>
                      <div class="text">
                        <p>
                          <span>Phone:</span>
                          <a href="tel://1234567920">+ 1235 2355 98</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-paper-plane"></span>
                      </div>
                      <div class="text">
                        <p>
                          <span>Email:</span>
                          <a href="mailto:info@yoursite.com">
                            info@yoursite.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-globe"></span>
                      </div>
                      <div class="text">
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
      </header>
    </main>
  );
};
export default about;
