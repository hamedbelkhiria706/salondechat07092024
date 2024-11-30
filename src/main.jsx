import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App copy.jsx"; // Make sure to include .jsx extension here

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
