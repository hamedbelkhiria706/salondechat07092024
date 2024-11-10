import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Index";
<<<<<<< HEAD
import ContactPage from "./Pages/Contact";

function App() {
  return (
    <Router>
      {/* <Navbar></Navbar> */}
=======
import Navbar from "./components/newnavbar";
function App() {
  return (
    <Router>
      <Navbar />
>>>>>>> 2aba8b0b4f03cf9891fec14ccf8d31bacf9da185
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;
