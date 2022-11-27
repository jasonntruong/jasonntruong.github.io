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
  links: [string, string];
}
function Card(props: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [displayImg, setdisplayImg] = useState("");
  const [displayTitle, setDisplayTitle] = useState("");

  const handleExtra = (type: string, img: string, extra: string) => {
    return (
      <img
        className="columnImg"
        src={img}
        key={img}
        alt={img}
        onClick={() => {
          if (type === "link") {
            window.open(extra, "_blank", "noopener,noreferrer");
          } else if (type === "image") {
            setOpenModal(true);
            setdisplayImg(img);
            setDisplayTitle(extra);
          }
        }}
      />
    );
  };

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
              return handleExtra("image", img, title);
            })}
            {props.links?.map(([img, link]) => {
              return handleExtra("link", img, link);
            })}
          </div>

          {props.imgs && (
            <i style={{ color: "gray", fontSize: "12px" }}>
              <br />
              {"click images to enlarge"}
            </i>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
