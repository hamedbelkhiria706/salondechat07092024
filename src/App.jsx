import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Index";
import ContactPage from "./Pages/Contact";
import Navbar from "./components/MainNavbar";
import Footer from "./components/newfooter";
import Plans from "./Pages/Plans";
import Login from "./Pages/AuthPage";
import MentionsLegales from "./Pages/MentionsLegales";
import PolitiqueDeConfidentialite from "./Pages/PolitiqueDeConfidentialite";
import Chatroom from "./components/Chatroom";
import UserDashboard from "./components/UserDashboard";
import EditProfile from "./components/EditProfile1";
import Password from "./components/password";
import DynamicChatSalon from "./components/DynamicSalonChat";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
        <Route
          path="/politiquedeconfidentialite"
          element={<PolitiqueDeConfidentialite />}
        />
        <Route path="/chatroom/:username" element={<Chatroom />} />
        <Route path="/dashboard" element={<UserDashboard/>}/>
        <Route path='/editprofile' element={<EditProfile/>}/>
        <Route path="/abonnement" element={<DynamicChatSalon/>}/>
        <Route path="/password" element={<Password/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
