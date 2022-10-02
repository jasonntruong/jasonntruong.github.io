import "./App.scss";

import React, { useState } from "react";

import Hands from "./Hands.tsx";
import NavBar from "./NavBar.tsx";

function App() {
  const [selected, setSelected] = useState("home");
  const [hovering, setHovering] = useState("home");

  function onHoverMenu(item: string) {
    setHovering(item);
    console.log("hovering", hovering);
  }
  function onSelectedMenu(item: string) {
    setSelected(item);
    console.log("selected", selected);
  }
  function onLeaveHover() {
    setHovering(selected);
    console.log("left", hovering, selected);
  }
  return (
    <>
      <div id="titleContainer">
        <button id="title">Jason Truong</button>
      </div>
      <div className="row">
        <div className="column">
          <p style={{ fontSize: "0.1px" }}>hi</p>
        </div>
        <div className="column">
          <Hands hovering={hovering} />
        </div>
        <div className="column">
          <NavBar
            onHover={onHoverMenu}
            onSelect={onSelectedMenu}
            onLeave={onLeaveHover}
          />
        </div>
      </div>
    </>
  );
}

export default App;
