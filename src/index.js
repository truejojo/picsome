import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { PhotoContextProvider } from "./PhotoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PhotoContextProvider>
      <Router>
        <App />
      </Router>
    </PhotoContextProvider>
  </React.StrictMode>
);
