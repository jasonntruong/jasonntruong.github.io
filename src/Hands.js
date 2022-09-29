import "./hands.scss";

import React from "react";
import one from "./imgs/hands/one.png";

function Hands() {
  return (
    <div id="handContainer">
      <img id="hand" src={one} alt="hands_one" thumbnail />
    </div>
  );
}

export default Hands;
