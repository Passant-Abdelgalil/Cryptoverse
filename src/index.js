/* antd */
import "antd/dist/antd.css";

/* Components */
import App from "./App";
/* React Imports */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
