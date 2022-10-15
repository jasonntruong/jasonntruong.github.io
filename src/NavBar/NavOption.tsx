import React from "react";

interface Props {
  title: string;
  hovering: string;
  onHover: (string) => void;
  onSelect: (string) => void;
  onLeave: () => void;
}

function NavOption(props: Props) {
  console.log(props);
  return props.title === props.hovering ? (
    <div
      className="selected"
      onMouseEnter={() => props.onHover(props.title)}
      onClick={() => props.onSelect(props.title)}
      onMouseLeave={() => props.onLeave()}
    >
      <p>{props.title}</p>
    </div>
  ) : (
    <div
      className="nonselected"
      onMouseEnter={() => props.onHover(props.title)}
      onClick={() => props.onSelect(props.title)}
    >
      <div className="circle" />

      <p className="text">{props.title}</p>
    </div>
  );
}

export default NavOption;
