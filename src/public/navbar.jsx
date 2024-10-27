import React from "react";
import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
import "./stylescss/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#features">
              Fonctionnalités
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pricing">
              Tarifs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#testimonials">
              Témoignages
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#faq">
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="chat.html">
              Chat
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="dynamicsalonchat.html">
              Abonnement
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link btn btn-primary text-white"
              href="login.html"
            >
              Inscription
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
