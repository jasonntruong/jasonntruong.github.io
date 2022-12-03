// @ts-nocheck
import "../App.scss";

import Card from "../Card.tsx";
import HamburgerMenu from "../HamburgerMenu.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import React from "react";
import cafe from "../imgs/about/cafe.png";
import keyboard from "../imgs/about/keyboard.png";

interface Props {
  navbar: NavBar;
  isMobile: boolean;
}

function About({ navbar, isMobile }: Props) {
  const content = (
    <>
      <h1 className="title">About Me</h1>
      <Card
        title="Who's Jason?"
        desc={`I'm a 20 year old Vietnamese-Canadian Computer Science Co-op student at TMU (formerly Ryerson) from Toronto \n\n I build and code a lot of random projects that you should check out on my GitHub :D`}
      />
      <Card
        title="Hobbies"
        desc={`I'm super into keyboards and have custom built 4 to date. It's a super fun hobby that let's me personalize and customize the tool I use everyday \n\n I also really enjoy doing work at local cafes. Something about working while drinking an iced americano in a well furnished cafe increases productivity`}
        imgs={[
          [keyboard, "My Keyboard"],
          [cafe, "DAO Cafe"],
        ]}
      />
      <Card
        title="Extracurriculars"
        desc={`Currently I'm VP Communications on TMU's Computer Science Course Union \n\n I act as the public relations contact for students and student societies on behalf of the CSCU. I also design promotions and promote for all of our events via our Instagram, website, and monthly newsletter`}
      />
      <br />
    </>
  );

  if (isMobile) {
    return (
      <div>
        <HamburgerMenu />
        <div className="mobileInfo">{content}</div>
      </div>
    );
  }
  return (
    <div className="row">
      <div className="column2">
        <div className="left-content">{content}</div>
      </div>
      <div className="column">{navbar}</div>
    </div>
  );
}

export default About;
