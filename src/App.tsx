import "./App.scss";

import React, { useState } from "react";

import Card from "./Card.tsx";
import Hands from "./Hands.tsx";
import NavBar from "./NavBar.tsx";

function App() {
  const [selected, setSelected] = useState("home");
  const [hovering, setHovering] = useState("home");

  function onHoverMenu(item: string) {
    setHovering(item);
  }
  function onSelectedMenu(item: string) {
    setSelected(item);
  }
  function onLeaveHover() {
    setHovering(selected);
  }
  return (
    <>
      <div id="titleContainer">
        <button id="title">Jason Truong</button>
      </div>
      <div className="row">
        <div className="column">
          <p style={{ fontSize: "0.1px" }}>a</p>
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
      <Card title="TD Bank" desc="At TD I was a software developer" />
    </>
  );
}

export default App;
