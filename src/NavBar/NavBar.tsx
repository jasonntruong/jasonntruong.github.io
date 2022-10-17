import "./NavBar.scss";

import { Link, BrowserRouter as Router } from "react-router-dom";

import NavOption from "./NavOption.tsx";
import React from "react";

interface Props {
  hovering: string;
  onHover: (string) => void;
  onSelect: (string) => void;
  onLeave: () => void;
}
function NavBar(props: Props) {
  return (
    <div>
      <div className="container" onMouseLeave={() => props.onLeave()}></div>
      <div className="bar">
        <div className="line" />
        <Router>
          <Link to="/" className="link">
            <NavOption title="home" {...props} />
          </Link>
          <Link to="/about" className="link">
            <NavOption title="about" {...props} />
          </Link>
          <Link to="/experience" className="link">
            <NavOption title="experience" {...props} />
          </Link>
          <Link to="/projects" className="link">
            <NavOption title="projects" {...props} />
          </Link>
        </Router>
      </div>
    </div>
  );
}

export default NavBar;
