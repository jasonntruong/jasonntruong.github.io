import "../App.scss";

import Card from "../Card.tsx";
import HamburgerMenu from "../HamburgerMenu.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import React from "react";
import globe from "../imgs/globe.webp";

interface Props {
  navbar: NavBar;
  isMobile: boolean;
}
function Projects({ navbar, isMobile }: Props) {
  const info = (
    <>
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
    </>
  );

  if (isMobile) {
    return (
      <div>
        <HamburgerMenu />
        <div className="mobileInfo">{info}</div>
      </div>
    );
  }
  return (
    <div className="row">
      <div className="column2">
        <div className="left-content">{info}</div>
      </div>
      <div className="column">{navbar}</div>
    </div>
  );
}

export default Projects;
