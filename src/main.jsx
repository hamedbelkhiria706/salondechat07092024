import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Make sure to include .jsx extension here
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
