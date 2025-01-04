import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Building empty pages
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
  import ChatroomsList from "./components/ChatRoomList";
import Chatroom from "./components/Chatroom";
import EditProfile from "./components/EditProfile1";
 import CreateChatroom from "./components/CreateChatroom";
import UserProfile from "./components/UserProfile";
 import Settings from "./components/Settings";
import ExportData from './components/exportdata';
// Import global styles
 import './styles/global.css';
import Password from './components/password'
// Import Navbar and Footer
import Navbar from "./components/MainNavbar";
import Footer from "./components/newfooter";
import LoginEmailMDP from "./Pages/LoginEmailMDP";

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
        <Route path="/eplogin" element={<LoginEmailMDP/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
        <Route
          path="/politiquedeconfidentialite"
          element={<PolitiqueDeConfidentialite />}
        />
          {/* Routes utilisateur (authentifiées) */}
    <Route path="/user/:userId/profile" element={<UserProfile />} />

    <Route path="/user/:userId/dashboard" element={<UserDashboard />} />

    <Route path="/user/:userId/notifications" element={<Notifications />} />
    <Route path="/user/:userId/exportdata" element={<ExportData />} />  
    <Route path="/user/:userId/editprofile" element={<EditProfile />} />   
    <Route path="/user/:userId/password" element={<Password />} /> 
    <Route path="/user/:userId/chatrooms/:chatroomId" element={<Chatroom />} />
    <Route path="/user/:userId/chatrooms" element={<ChatroomsList />} />
    <Route path="/user/:userId/settings" element={<Settings />} />  
    <Route path="/user/:userId/chatrooms/new" element={<CreateChatroom />} />
      </Routes>

      {/* Pied de page */}
      <Footer />  
    </Router>
  );
}

export default App;