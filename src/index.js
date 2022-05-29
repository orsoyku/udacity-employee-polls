import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./routers/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </Router>
  </React.StrictMode>
);
