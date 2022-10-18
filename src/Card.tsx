import "./Card.scss";
import "./App.scss";

import React from "react";
import topitems from "./imgs/topitems.png";

interface Props {
  title: string;
  desc: string;
  imgs: [];
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
        {props.imgs.map((img) => {
          return <img className="column" src={img} />;
        })}
      </div>
    </div>
  );
}

export default Card;
