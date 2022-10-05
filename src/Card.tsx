import "./Card.scss";

import React from "react";
import topitems from "./imgs/topitems.png";

interface Props {
  title: string;
  desc: string;
}

function Card(props: Props) {
  return (
    <div className="background">
      <div className="top">
        <p>{props.title}</p>

        <img src={topitems}></img>
      </div>
      <div className="bottom">
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Card;
