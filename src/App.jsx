import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Index";
import ContactPage from "./Pages/Contact";
import Navbar from "./components/newnavbar";
import Footer from "./components/newfooter";
import DynamicSalonChat from "./Pages/dynamicsalonchat";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/chat" element={<DynamicSalonChat />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
