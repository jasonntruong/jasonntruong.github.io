import "./App.scss";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

import About from "./Pages/About.tsx";
import Card from "./Card.tsx";
import Experience from "./Pages/Experience.tsx";
import Home from "./Pages/Home.tsx";
import NavBar from "./NavBar/NavBar.tsx";
import Projects from "./Pages/Projects.tsx";

function App() {
  const [selected, setSelected] = useState("");
  const [hovering, setHovering] = useState("");

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
    <Router>
      <div id="titleContainer">
        <Link to="/" id="title" onClick={() => onSelectedMenu("home")}>
          Jason Truong
        </Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={<Home hovering={hovering} navbar={navbar} />}
        />
        <Route path="/about" element={<About navbar={navbar} />}></Route>
        <Route
          path="/experience"
          element={<Experience navbar={navbar} />}
        ></Route>
        <Route path="/projects" element={<Projects navbar={navbar} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
