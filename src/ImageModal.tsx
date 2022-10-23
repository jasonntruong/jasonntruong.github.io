import React, { useState } from "react";

function ImageModal({ displayImg, setOpenModal, title }) {
  return (
    <div>
      <p
        style={{
          fontFamily: "Adelle",
          fontWeight: "bold",
          fontSize: "25px",
          display: "inline-flex",
        }}
      >
        {title}
      </p>

      <p className="x" onClick={() => setOpenModal(false)}>
        x
      </p>
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        {/* <button onClick={() => setOpenModal(false)}>close</button> */}
        <img
          src={displayImg}
          style={{
            width: "80%",
          }}
        />
      </div>
    </div>
  );
}

export default ImageModal;
