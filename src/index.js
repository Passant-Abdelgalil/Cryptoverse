/* antd */
import "antd/dist/antd.min.css";

/* Components */
import App from "./App";
import { Provider } from "react-redux";
/* React Imports */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
/* Store */
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
