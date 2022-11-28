import "./hamburgermenu.scss";

import React, { useState } from "react";

import { slide as Menu } from "react-burger-menu";
import hamburger from "./imgs/hamburger.png";

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let currentLocation = window.location.pathname.substring(1);
  currentLocation = currentLocation.length === 0 ? "home" : currentLocation;
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  return (
    <>
      {isMenuOpen && (
        <Menu
          isOpen={isMenuOpen}
          onStateChange={async (state) => {
            await sleep(400);
            setIsMenuOpen(state.isOpen);
          }}
        >
          <a
            href="/"
            className={currentLocation === "home" ? "selected-bm-item" : ""}
          >
            home
          </a>
          <a
            href="/about"
            className={currentLocation === "about" ? "selected-bm-item" : ""}
          >
            about
          </a>
          <a
            href="/experience"
            className={
              currentLocation === "experience" ? "selected-bm-item" : ""
            }
          >
            experience
          </a>
          <a
            href="/projects"
            className={currentLocation === "projects" ? "selected-bm-item" : ""}
          >
            projects
          </a>
        </Menu>
      )}
      <img
        id="hamburger"
        alt="hamburger-menu"
        src={hamburger}
        style={{ width: "6vw", marginLeft: "15px", cursor: "pointer" }}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
    </>
  );
}

export default HamburgerMenu;
