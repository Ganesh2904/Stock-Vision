import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {  HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const basename = process.env.NODE_ENV === "production" ? "/Stock-Vision" : "";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter basename={basename}>
      <App />
    </HashRouter>
  </StrictMode>
);
