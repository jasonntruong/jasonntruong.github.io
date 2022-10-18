import "./Card.scss";

import React, { useState } from "react";

import ImageModal from "./ImageModal.tsx";
import Modal from "react-modal";
import topitems from "./imgs/topitems.png";

Modal.setAppElement(document.getElementById("root"));
interface Props {
  title: string;
  desc: string;
  imgs: [];
}
function Card(props: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [displayedImg, setDisplayedImg] = useState();

  return (
    <>
      <Modal className="modal" isOpen={openModal}>
        <ImageModal displayedImg={displayedImg} setOpenModal={setOpenModal} />
      </Modal>
      <div className="background">
        <div className="top">
          <p>{props.title}</p>
          <img src={topitems}></img>
        </div>
        <div className="bottom">
          <p>{props.desc}</p>
          <div className="rowImg">
            {props.imgs?.map((img) => {
              return (
                <img
                  className="columnImg"
                  src={img}
                  key={img}
                  alt={img}
                  onClick={() => {
                    setOpenModal(true);
                    setDisplayedImg(img);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
