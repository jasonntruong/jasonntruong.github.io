import "./App.scss";

import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./Pages/About.tsx";
import Card from "./Card.tsx";
import Experience from "./Pages/Experience.tsx";
import Home from "./Pages/Home.tsx";
import NavBar from "./NavBar/NavBar.tsx";
import Projects from "./Pages/Projects.tsx";

function App() {
  const [selected, setSelected] = useState("home");
  const [hovering, setHovering] = useState("home");

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
    <>
      <div id="titleContainer">
        <button id="title">Jason Truong</button>
      </div>
      <Router>
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
          <Route
            path="/projects"
            element={<Projects navbar={navbar} />}
          ></Route>
        </Routes>
      </Router>
      {/* <Card title="TD Bank" desc="At TD I was a software developer" /> */}
    </>
  );
}

export default App;
