import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import NavigationWrapper from "./components/navigation/NavigationWrapper.js";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavigationWrapper></NavigationWrapper>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
