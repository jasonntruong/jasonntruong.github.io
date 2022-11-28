import React, { useEffect, useState } from "react";

import HamburgerMenu from "../HamburgerMenu.tsx";
import Hands from "../Hands.tsx";
import { slide as Menu } from "react-burger-menu";
import NavBar from "../NavBar/NavBar.tsx";
import globe from "../imgs/globe.webp";
import hamburger from "../imgs/hamburger.png";

interface Props {
  hovering: string;
  navbar: NavBar;
  isMobile: boolean;
}

function Home(props: Props) {
  if (props.isMobile) {
    return (
      <div>
        <HamburgerMenu />
        <img className="globe" src={globe} />
        <p className="desc">Third Year CS @ TMU</p>
        <p className="desc">Software Dev Intern @ TD</p>
        <p className="desc">Aspiring SWE</p>
      </div>
    );
  }
  return (
    <div className="row">
      <div className="column">
        <img className="globe" src={globe} />
        <p className="desc">Third Year CS @ TMU</p>
        <p className="desc">Software Dev Intern @ TD</p>
        <p className="desc">Aspiring SWE</p>
      </div>
      <div className="column">
        <Hands hovering={props.hovering} />
      </div>
      <div className="column">{props.navbar}</div>
    </div>
  );
}

export default Home;
