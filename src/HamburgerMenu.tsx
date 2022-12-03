// @ts-nocheck
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
            href={currentLocation === "home" ? "javascript:void(0);" : "/"}
            className={currentLocation === "home" ? "selected-bm-item" : ""}
            rel="noopener noreferrer"
          >
            home
          </a>
          <a
            href={
              currentLocation === "about" ? "javascript:void(0);" : "/about"
            }
            className={currentLocation === "about" ? "selected-bm-item" : ""}
            rel="noopener noreferrer"
          >
            about
          </a>
          <a
            href={
              currentLocation === "experience"
                ? "javascript:void(0);"
                : "/experience"
            }
            className={
              currentLocation === "experience" ? "selected-bm-item" : ""
            }
            rel="noopener noreferrer"
          >
            experience
          </a>
          <a
            href={
              currentLocation === "projects"
                ? "javascript:void(0);"
                : "/projects"
            }
            className={currentLocation === "projects" ? "selected-bm-item" : ""}
            rel="noopener noreferrer"
          >
            projects
          </a>
        </Menu>
      )}
      <img
        className="hamburger-btn"
        alt="hamburger-menu"
        src={hamburger}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
    </>
  );
}

export default HamburgerMenu;
