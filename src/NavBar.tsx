import "./NavBar.scss";

import React from "react";

interface Props {
  onHover: (string) => void;
  onSelect: (string) => void;
  onLeave: () => void;
}
function NavBar(props: Props) {
  return (
    <div>
      <div className="container" onMouseLeave={() => props.onLeave()}></div>
      <div className="a">
        <div
          className="selected"
          onMouseEnter={() => props.onHover("home")}
          onClick={() => props.onSelect("home")}
          onMouseLeave={() => props.onLeave()}
        >
          <p>Home</p>
        </div>
        <div className="selectLine"></div>

        <div className="line"></div>
        <div
          className="pageItem"
          style={{ display: "inline-block" }}
          onMouseEnter={() => props.onHover("about")}
          onClick={() => props.onSelect("about")}
        >
          <div className="circle" style={{ float: "left" }}></div>
          <p className="option">About</p>
        </div>
        <div className="line"></div>
        <div
          className="pageItem"
          style={{ display: "inline-block" }}
          onMouseEnter={() => props.onHover("experience")}
          onClick={() => props.onSelect("experience")}
        >
          <div className="circle" style={{ float: "left" }}></div>
          <p
            style={{
              position: "absolute",
              float: "left",
              display: "inline-block",
            }}
          >
            Experience
          </p>
        </div>
        <div className="line"></div>
        <div
          className="pageItem"
          style={{ display: "inline-block" }}
          onMouseEnter={() => props.onHover("projects")}
          onClick={() => props.onSelect("projects")}
        >
          <div className="circle" style={{ float: "left" }}></div>
          <p
            style={{
              position: "absolute",
              float: "left",
              display: "inline-block",
            }}
          >
            Projects
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
