import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css"; // we could add global styles here
import { Routes } from "@generouted/react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Routes /> // The insanity of how this translates to routes is explained here: https://github.com/oedotme/generouted?tab=readme-ov-file#conventions
);
