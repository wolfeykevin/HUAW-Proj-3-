import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./_context/AppProvider";
import { GameProvider } from "./_context/GameProvider";
import App from "./_app/App";
import NotFound from "./routes/NotFound";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>

      <React.StrictMode>
        <Router fallback={<NotFound />} exceptionElement={<NotFound />}>
          <App />
        </Router>
      </React.StrictMode>

  </AppProvider>
);
