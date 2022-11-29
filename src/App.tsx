// @ts-nocheck
import "./App.scss";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

import About from "./Pages/About.tsx";
import Experience from "./Pages/Experience.tsx";
import { Helmet } from "react-helmet";
import Home from "./Pages/Home.tsx";
import NavBar from "./NavBar/NavBar.tsx";
import Projects from "./Pages/Projects.tsx";

function App() {
  const [selected, setSelected] = useState("");
  const [hovering, setHovering] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    let currentLocation = window.location.pathname.substring(1);
    currentLocation = currentLocation.length === 0 ? "home" : currentLocation;
    setSelected(currentLocation);
    setHovering(currentLocation);
  }, [selected]);

  function onHoverMenu(item: string) {
    setHovering(item);
  }
  function onSelectedMenu(item: string) {
    setSelected(item);
  }
  function onLeaveHover() {
    setHovering(selected);
  }

  const navbar = (
    <NavBar
      hovering={hovering}
      onHover={onHoverMenu}
      onSelect={onSelectedMenu}
      onLeave={onLeaveHover}
    />
  );
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jason Truong</title>
        <link rel="canonical" href="https://jason-truong.com" />
      </Helmet>
      <Router>
        <div id="titleContainer">
          <Link to="/" id="title" onClick={() => onSelectedMenu("home")}>
            Jason Truong
          </Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Home hovering={hovering} navbar={navbar} isMobile={isMobile} />
            }
          />
          <Route
            path="/about"
            element={<About navbar={navbar} isMobile={isMobile} />}
          ></Route>
          <Route
            path="/experience"
            element={<Experience navbar={navbar} isMobile={isMobile} />}
          ></Route>
          <Route
            path="/projects"
            element={<Projects navbar={navbar} isMobile={isMobile} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
