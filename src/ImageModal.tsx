import "./Modal.scss";

import React, { useEffect } from "react";

interface Props {
  displayImg: string;
  setOpenModal: (boolean) => void;
  title: string;
  limittingDimension: string;
}

function ImageModal({
  displayImg,
  setOpenModal,
  title,
  limittingDimension,
}: Props) {
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        setOpenModal(false);
      }
    });
  }, []);

  return (
    <div>
      <p className="modalText">{title}</p>
      <p className="x" onClick={() => setOpenModal(false)}>
        x
      </p>
      <div className="imgContainer">
        <img
          className={`displayImg-${limittingDimension}`}
          src={displayImg}
          loading="lazy"
          alt={title + " img"}
        />
      </div>
    </div>
  );
}

export default ImageModal;
