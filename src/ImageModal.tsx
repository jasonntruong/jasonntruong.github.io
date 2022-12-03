import "./Modal.scss";

import React, { useEffect } from "react";

interface Props {
  displayImg: string;
  setOpenModal: (boolean) => void;
  title: string;
}

function ImageModal({ displayImg, setOpenModal, title }: Props) {
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        setOpenModal(false);
      }
    });
  }, []);

  return (
    <div>
      <p className="modalTitle">{title}</p>

      <p className="x" onClick={() => setOpenModal(false)}>
        x
      </p>
      <div className="imgContainer">
        <img className="displayImg" src={displayImg} alt="displayimg" />
      </div>
    </div>
  );
}

export default ImageModal;
