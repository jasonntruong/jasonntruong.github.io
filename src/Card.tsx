import "./Card.scss";

import React, { useState } from "react";

import ImageModal from "./ImageModal.tsx";
import Modal from "react-modal";
import topitems from "./imgs/topitems.png";

Modal.setAppElement(document.getElementById("root"));
interface Props {
  title: string;
  desc: string;
  imgs: [string, string];
}
function Card(props: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [displayImg, setdisplayImg] = useState();
  const [displayTitle, setDisplayTitle] = useState("");

  return (
    <>
      <Modal className="modal" isOpen={openModal}>
        <ImageModal
          displayImg={displayImg}
          title={displayTitle}
          setOpenModal={setOpenModal}
        />
      </Modal>
      <div className="background">
        <div className="top">
          <p>{props.title}</p>
          <img src={topitems}></img>
        </div>
        <div className="bottom">
          <p>{props.desc}</p>
          <div className="rowImg">
            {props.imgs?.map(([img, title]) => {
              console.log(typeof img);
              return (
                <img
                  className="columnImg"
                  src={img}
                  key={img}
                  alt={img}
                  onClick={() => {
                    setOpenModal(true);
                    setdisplayImg(img);
                    setDisplayTitle(title);
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
