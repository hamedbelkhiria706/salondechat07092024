
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"; // Ajout de l'import manquant

// import {useState} from 'react'; // Unused import
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Import the new Logo component

function MainNavbar({ connecte, setConnecte }) {


  const handleLogout = () => {
    setConnecte(false);
    // Vous pouvez ajouter d'autres logiques ici, comme une redirection
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>

        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/plans" className="text-light">
              Plans
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light">
              Contact
            </Nav.Link>
          </Nav>


          {connecte ? (
            <>
              <Nav.Link as={Link} to="/profile" className="text-light">
                Profile
              </Nav.Link>
              <Button variant="link" className="nav-link text-light" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (<>
            <Button as={Link} to="/register" className="me-2">
              Inscription
            </Button>
            <Button variant="warning" as={Link} to="/login">
              Connexion
            </Button></>
          )}
        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}