import React from "react";
import { useState } from "react";

const ContactPage = () => {
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'adresse email n'est pas valide.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Le motif est requis.";
    if (!formData.message.trim()) newErrors.message = "Le message est requis.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrors({});
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setLoading(true);
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form data submitted:", formData);
    setSuccessMessage("Votre message a été envoyé avec succès ! Merci.");
    setFormData(initialFormData); // Réinitialiser le formulaire
    setLoading(false);
  };
  return (
    <main  >
      <header className="mt-5  ">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row no-gutters mb-5">
                <div className="col  ">
                  <div className="w-100 p-md-5 p-4">
                    <h1 className="mb-4 text-center">Nous contacter</h1>
                    {loading && <div className="alert alert-info text-center">Envoi en cours...</div>}
                    {successMessage && <div className="alert alert-success text-center">{successMessage}</div>}
                    {/* Les erreurs spécifiques aux champs seront affichées sous chaque champ */}

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
                              Nom complet
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="name"
                              placeholder="Votre nom complet"
                              value={formData.name}
                              onChange={handleInputChange}
                              pattern="[A-Za-zÀ-ÿ ']+"
                              title="Please enter a valid name (letters and spaces only)."
                            />
                            {errors.name && (
                              <div className="invalid-feedback d-block">
                                {errors.name}
                              </div>
                            )}
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
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                            {errors.email && (
                              <div className="invalid-feedback d-block">
                                {errors.email}
                              </div>
                            )}
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
                              value={formData.subject}
                              onChange={handleInputChange}
                            />
                            {errors.subject && (
                              <div className="invalid-feedback d-block">
                                {errors.subject}
                              </div>
                            )}
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
                              value={formData.message}
                              onChange={handleInputChange}
                            ></textarea>
                            {errors.message && (
                              <div className="invalid-feedback d-block">
                                {errors.message}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value={loading ? "Envoi en cours..." : "Envoyer le Message"}
                              className="btn btn-primary"
                              disabled={loading}
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
