import "./NavBar.scss";

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
        <NavOption title="home" {...props} />
        <NavOption title="about" {...props} />
        <NavOption title="experience" {...props} />
        <NavOption title="projects" {...props} />
      </div>
    </div>
  );
}

export default NavBar;
