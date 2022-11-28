import "../App.scss";

import Card from "../Card.tsx";
import HamburgerMenu from "../HamburgerMenu.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import React from "react";

interface Props {
  navbar: NavBar;
  isMobile: boolean;
}

function About({ navbar, isMobile }: Props) {
  if (isMobile) {
    return (
      <div>
        <HamburgerMenu />
        <div style={{ marginLeft: "15px" }}>
          <h1 className="title">About Me</h1>
          <Card title="Custom Keyboards" desc="I'm super into keyboards" />
        </div>
      </div>
    );
  }
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
