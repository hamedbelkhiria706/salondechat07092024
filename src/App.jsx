import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./about";
import Chat from "./chat";
import DeleteAccount from "./deleteaccount";
import DeleteChatHistory from "./deletechathistory";
import DynamicSalonChat from "./dynamicsalonchat";
import EditProfile from "./editprofile";
import ExportData from "./exportdata";
import FAQs from "./faqs";
import Footer from "./footer";
import Login from "./login";
import Navbar from "./navbar";
import Notifications from "./notifications";
import NousContacter from "./nouscontacter";
import Password from "./password";
import Plugins from "./plugins";
import Profile from "./profile";
import RandomChatSalon from "./randomchatsalon";
import SignUp from "./signup";
import UpdateProfile from "./update_profile";
import YourChatSalon from "./yourchatsalon";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Render the navbar on all pages */}
      <Switch>
        {/* Define your routes here */}
        <Route path="/" exact component={Chat} />
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
