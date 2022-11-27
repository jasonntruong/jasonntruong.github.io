import React, { useEffect, useState } from "react";

import Hands from "../Hands.tsx";
import { slide as Menu } from "react-burger-menu";
import NavBar from "../NavBar/NavBar.tsx";
import globe from "../imgs/globe.webp";
import hamburger from "../imgs/hamburger.png";

interface Props {
  hovering: string;
  navbar: NavBar;
}

function Home(props: Props) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
  });

  if (width >= 768) {
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
  return (
    <div>
      <img className="hamburger" src={hamburger} style={{ width: "6vw" }} />
    </div>
    // <Menu left width={"20%"} noOverlay customBurgerIcon={false}>
    //   <a id="home" className="menu-item" href="/">
    //     Home
    //   </a>
    // </Menu>
  );
}

export default Home;
