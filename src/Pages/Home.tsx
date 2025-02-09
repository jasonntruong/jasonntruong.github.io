// @ts-nocheck
import { FadeIn } from "react-slide-fade-in";
import HamburgerMenu from "../HamburgerMenu.tsx";
import Hands from "../Hands.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import React from "react";
import globe from "../imgs/globe.webp";

interface Props {
  hovering: string;
  navbar: NavBar;
  isMobile: boolean;
}

function Home(props: Props) {
  const info = (
    <>
      <img className="globe" src={globe} loading="lazy" />
      <p className="desc">Fifth Year CS @ TMU</p>
      <p className="desc">Incoming SWE @ Shopify</p>
      <p className="desc">Always Learning</p>
    </>
  );

  if (props.isMobile) {
    return (
      <div>
        <HamburgerMenu />
        {info}
      </div>
    );
  }
  return (
    <div className="row">
      <FadeIn>
        <div className="column">{info}</div>
        <div className="column">
          <Hands hovering={props.hovering} />
        </div>
      </FadeIn>
      <div className="column">{props.navbar}</div>
    </div>
  );
}

export default Home;
