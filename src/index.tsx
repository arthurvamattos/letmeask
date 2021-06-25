import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "./contexts/ThemeContext";

import "./services/firebase";
import ReactModal from "react-modal";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

ReactModal.setAppElement("#root");
