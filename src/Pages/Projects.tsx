import "../App.scss";

import Card from "../Card.tsx";
import React from "react";
import globe from "../imgs/globe.webp";

function Projects({ navbar }) {
  return (
    <div className="row">
      <div className="column2">
        <div className="left-content">
          <h1 className="title">Projects</h1>
          <Card
            title="Custom Keyboards"
            desc="I'm super into keyboards"
            imgs={[
              [globe, "Globe 1"],
              [globe, "Globe 2"],
              [globe, "Glove 3"],
            ]}
            links={[[globe, "https://www.google.com"]]}
          />
        </div>
      </div>
      <div className="column">{navbar}</div>
    </div>
  );
}

export default Projects;
