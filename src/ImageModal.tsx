import "./Modal.scss";

import React, { useRef, useState } from "react";

import { useEffect } from "react";

interface Props {
  img: string;
  title: string;
  closeModal: (boolean) => void;
}
function ImageModal({ img, title, closeModal }: Props) {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const imageRef = useRef(null);
  useEffect(() => {
    if (imageRef && imageRef.current) {
      setWidth(imageRef.current["width"]);
      setHeight(imageRef.current["height"]);
    }
  });
  return (
    <div>
      <div>
        <p className="modalText">{title}</p>
        <p className="x" onClick={closeModal}>
          x
        </p>
      </div>
      <img
        className={width > height ? "displayImg-width" : "displayImg-height"}
        src={img}
        ref={imageRef}
      />
    </div>
  );
}

export default ImageModal;
