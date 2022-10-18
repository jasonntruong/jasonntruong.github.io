import "../App.scss";

import Card from "../Card.tsx";
import React from "react";

function About({ navbar }) {
  return (
    <div className="row">
      <div className="column2">
        <div className="left-content">
          <h1 className="title">About Me</h1>
          <Card title="Custom Keyboards" desc="I'm super into keyboards" />
        </div>
      </div>
      <div className="column">{navbar}</div>
    </div>
  );
}

export default About;
