import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importation des pages principales
import HomePage from "./Pages/Index";
import ContactPage from "./Pages/Contact";
import Plans from "./Pages/Plans";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MentionsLegales from "./Pages/MentionsLegales";
import PolitiqueDeConfidentialite from "./Pages/PolitiqueDeConfidentialite";

// Importation des pages utilisateur
import UserDashboard from "./components/UserDashboard";
import Notifications from "./Pages/Notifications";
import ChatroomsList from "./components/ChatroomsList";
import Chatroom from "./components/Chatroom";
import EditProfile from "./components/EditProfile1";
import DynamicChatSalon from "./components/DynamicSalonChat";
import Password from "./components/password";
import Register from "./Pages/Register";
import Notifications from './Pages/Notifications';
import './styles/global.css'
function App() {
  return (
    <Router>
      {/* Barre de navigation */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Routes principales */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
        <Route
          path="/politiquedeconfidentialite"
          element={<PolitiqueDeConfidentialite />}
        />

        {/* Routes utilisateur (authentifiées) */}
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/user/:userId/dashboard" element={<UserDashboard />} />
        <Route path="/user/:userId/notifications" element={<Notifications />} />
        <Route path="/user/:userId/editprofile" element={<EditProfile />} />
        <Route path="/user/:userId/chatrooms" element={<ChatroomsList />} />
        <Route
          path="/user/:userId/chatrooms/new"
          element={<CreateChatroom />}
        />
        <Route
          path="/user/:userId/chatrooms/:chatroomId"
          element={<Chatroom />}
        />
        <Route path="/user/:userId/settings" element={<Settings />} />
      </Routes>

      {/* Pied de page */}
      <Footer />
    </Router>
  );
}

export default App;
