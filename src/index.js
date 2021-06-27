import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "normalize.css";
import "./index.css";

if (!localStorage.getItem("indigo-visitor")) {
  localStorage.setItem("indigo-visitor", JSON.stringify([1, 2, 3]));
}

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
