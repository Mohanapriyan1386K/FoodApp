import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./Routers/AuthContext";
import { Server } from "./Services/Server";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Server>
        <App />
      </Server>
    </AuthProvider>
  </React.StrictMode>
);
