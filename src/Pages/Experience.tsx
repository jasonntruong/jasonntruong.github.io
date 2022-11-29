import "../App.scss";

import Card from "../Card.tsx";
import HamburgerMenu from "../HamburgerMenu.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import React from "react";

interface Props {
  navbar: NavBar;
  isMobile: boolean;
}
function Experience({ navbar, isMobile }: Props) {
  const info = (
    <>
      <h1 className="title">Experience</h1>
      <Card title="Custom Keyboards" desc="I'm super into keyboards" />
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

export default Experience;
