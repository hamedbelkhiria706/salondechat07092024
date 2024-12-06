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
    if(!subject){
      console.log("Entrer le sujet")
    }
  };
  return (
    <main>
      <header className="mt-5 bg-dark">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row no-gutters mb-5">
                <div className="col text-white">
                  <div className="w-100 p-md-5 p-4">
                    <h1 className="mb-4">Contact Us</h1>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                      Votre message a été envoyé merci!
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
                              Nom
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
                              Merci de donner un nom valide.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" htmlFor="email">
                              Addresse Email
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
                              Merci de donner un email valide.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="subject">
                              Motif de contact
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
                              Merci de fournir un motif de contact.
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
                              Merci de fournir un message.
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
                    
                    <div className="row">
                      <div className="col-md-3">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-map-marker"></span>
                          </div>
                          <div className="text">
                            <p>
                              <span>Addresse:</span> 198 West 21th Street, Suite
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
                              <span>Téléphone:</span>
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
                              <a href="mailto:info@salondechat.com">
                                info@salondechat.com
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
                              <span>Website</span> <a href="salondechat.com">salondechat.com</a>
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
