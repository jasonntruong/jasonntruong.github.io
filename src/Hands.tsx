import "./hands.scss";

import React from "react";
import four from "./imgs/hands/four.png";
import one from "./imgs/hands/one.png";
import three from "./imgs/hands/three.png";
import two from "./imgs/hands/two.png";

interface Props {
  hovering: "home" | "about" | "experience" | "projects";
}

function Hands(props: Props) {
  const hands = { home: one, about: two, experience: three, projects: four };
  return (
    <div id="handContainer">
      <img
        id="hand"
        src={hands[props.hovering]}
        alt={props.hovering + " hand"}
      />
    </div>
  );
}

export default Hands;
