import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Index";
import ContactPage from "./Pages/Contact";
import Navbar from "./components/MainNavbar";
import Footer from "./components/newfooter";
import Plans from "./Pages/Plans";
import Login from "./Pages/Login";
import MentionsLegales from "./Pages/MentionsLegales";
import PolitiqueDeConfidentialite from "./Pages/PolitiqueDeConfidentialite";
import Chatroom from "./components/Chatroom";
import UserDashboard from "./components/UserDashboard";
import EditProfile from "./components/EditProfile1";
import DynamicChatSalon from "./components/DynamicSalonChat";
import Password from "./components/password";
import Register from "./Pages/Register";
import Notifications from './Pages/Notifications';
import './styles/global.css'
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
        <Route path='/user/:id/notifications' element={<Notifications/>}/>
        <Route
          path="/politiquedeconfidentialite"
          element={<PolitiqueDeConfidentialite />}
        />
        <Route path="/user/:id/chatroom" element={<Chatroom />} />
        <Route path="/user/:id/dashboard" element={<UserDashboard />} />
        <Route path="/user/:id/editprofile" element={<EditProfile />} />
        <Route path="/user/:id/abonnement" element={<DynamicChatSalon />} />
        <Route path="/user/:id/password" element={<Password />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
