import "./index.scss";

import Hands from "./Hands";
import NavBar from "./NavBar";
import React from "react";
import ReactDOM from "react-dom/client";
import one from "./imgs/hands/one.png";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div id="titleContainer">
      <button id="title" onClick={() => console.log("hello")}>
        Jason Truong
      </button>
    </div>
    <Hands />
    <NavBar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
