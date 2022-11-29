import "./Modal.scss";

import React from "react";

function ImageModal({ displayImg, setOpenModal, title }) {
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
