import Hands from "../Hands.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import React from "react";
import globe from "../imgs/globe.webp";

interface Props {
  hovering: string;
  navbar: NavBar;
}

function Home(props: Props) {
  return (
    <div className="row">
      <div className="column">
        <img className="globe" src={globe} />
        <p className="desc">Third Year CS @ TMU</p>
        <p className="desc">SWD Intern CS @ TD</p>
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
