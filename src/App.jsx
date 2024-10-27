import React from "react";
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

const App = () => {
  const location = useLocation();
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalizes the first letter
      .join(" ");
  };

  const generateTitle = () => {
    // Check if path is the root, then set a default title
    if (location.pathname === "/") {
      return "Accueil"; // Default title for the home page
    }

    // Split the pathname and transform it
    const formattedTitle = location.pathname
      .replace(/\//g, " ") // Replace slashes with spaces
      .replace(/-/g, " ") // Replace dashes with spaces
      .trim(); // Remove leading/trailing spaces

    return capitalizeWords(formattedTitle); // Capitalize each word
  };

  useEffect(() => {
    document.title = generateTitle(); // Set the document title
  }, [location]);
  return (
    <Router>
      <Navbar /> {/* Render the navbar on all pages */}
      <Switch>
        {/* Define your routes here */}
        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
        <Route path="/chat" component={Chat} />
        <Route path="/delete-account" component={DeleteAccount} />
        <Route path="/delete-chat-history" component={DeleteChatHistory} />
        <Route path="/dynamic-salon-chat" component={DynamicSalonChat} />
        <Route path="/edit-profile" component={EditProfile} />
        <Route path="/export-data" component={ExportData} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/login" component={Login} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/nouscontacter" component={NousContacter} />
        <Route path="/password" component={Password} />
        <Route path="/plugins" component={Plugins} />
        <Route path="/profile" component={Profile} />
        <Route path="/random-chat-salon" component={RandomChatSalon} />
        <Route path="/signup" component={SignUp} />
        <Route path="/update-profile" component={UpdateProfile} />
        <Route path="/your-chat-salon" component={YourChatSalon} />
        {/* You can add more routes as necessary */}
      </Switch>
      <Footer /> {/* Render footer on all pages */}
    </Router>
  );
};

export default App;
