import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Accueil
            </Link>
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
            <Link className="nav-link" to="/chat">
              Chat
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dynamicsalonchat">
              Abonnement
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link btn btn-primary text-white" to="/login">
              Inscription
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
