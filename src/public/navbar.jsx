import React from "react";
import "./stylescss/navbar.css";

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
            <Link className="nav-link" to="#features">
              Fonctionnalités
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#pricing">
              Tarifs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#testimonials">
              Témoignages
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#faq">
              FAQ
            </Link>
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
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Contact
              </Link>
            </li>
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
