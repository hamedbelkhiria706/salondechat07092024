import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Index";
import ContactPage from "./Pages/Contact";
import Navbar from "./components/MainNavbar";
import Footer from "./components/newfooter";
import Plans from "./Pages/Plans";
import Login from "./Pages/AuthPage";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueDeConfidentialite from "./pages/PolitiqueDeConfidentialite";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mentionslegales" element={<MentionsLegales/>}/>
        <Route path="politiquedeconfidentialite" element={<PolitiqueDeConfidentialite/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
