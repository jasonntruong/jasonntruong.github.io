import React, { useState } from "react";

function ImageModal({ displayedImg, setOpenModal }) {
  return (
    <div>
      <div>HELLO</div>
      <button onClick={() => setOpenModal(false)}>close</button>
      <img src={displayedImg} style={{ width: "100px" }} />
    </div>
  );
}

export default ImageModal;
