import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Index from "./public/index";
import About from "./public/about";
import Chat from "./public/chat";
import DeleteAccount from "./public/deleteaccount";
import DeleteChatHistory from "./public/deletechathistory";
import DynamicSalonChat from "./public/dynamicsalonchat";
import EditProfile from "./public/editprofile";
import ExportData from "./public/exportdata";
import FAQs from "./public/faqs";
import Footer from "./public/footer";
import Login from "./public/login";
import Navbar from "./public/navbar";
import Notifications from "./public/notifications";
import NousContacter from "./public/nouscontacter";
import Password from "./public/password";
import Plugins from "./public/plugins";
import Profile from "./public/profile";
import RandomChatSalon from "./public/randomchatsalon";
import SignUp from "./public/signup";
import UpdateProfile from "./public/update_profile";
import YourChatSalon from "./public/yourchatsalon";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom"; // Ensure you import Outlet
const AppRoutes = () => {
  const location = useLocation();

  // Effect to change the title based on the pathname
  useEffect(() => {
    // Example: Set the title based on the current path
    document.title =
      location.pathname === "/" ? "Home" : capitalizePath(location.pathname);
  }, [location]);

  const capitalizePath = (path) => {
    return path
      .split("/")
      .filter(Boolean) // Remove empty strings
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  };

  return (
    <Switch>
      {/* Define your routes here */}
      <Route index element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/delete-chat-history" element={<DeleteChatHistory />} />
      <Route path="/dynamic-salon-chat" element={<DynamicSalonChat />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/export-data" element={<ExportData />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/nouscontacter" element={<NousContacter />} />
      <Route path="/password" element={<Password />} />
      <Route path="/plugins" element={<Plugins />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/random-chat-salon" element={<RandomChatSalon />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
      <Route path="/your-chat-salon" element={<YourChatSalon />} />
      {/* You can add more routes as necessary */}
    </Switch>
  );
};
const App = () => {
  return (
    <Router>
      <Navbar /> {/* Render the navbar on all pages */}
      <AppRoutes></AppRoutes>
      <Outlet /> {/* Renders matched child routes */}
      <Footer /> {/* Render footer on all pages */}
    </Router>
  );
};

export default App;
