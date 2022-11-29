// @ts-nocheck
import "./Card.scss";

import React, { useState } from "react";

import ImageModal from "./ImageModal.tsx";
import Modal from "react-modal";
import Preview from "./Preview.tsx";
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
          <p className="cardTitle">{props.title}</p>
          <img alt="top items" src={topitems}></img>
        </div>
        <div className="bottom">
          <p className="cardDesc">{props.desc}</p>
          <div className="rowImg">
            {props.imgs?.map(([img, title]) => {
              return (
                <Preview
                  key={img}
                  img={img}
                  type={"image"}
                  extra={title}
                  onImageClick={() => {
                    setOpenModal(true);
                    setdisplayImg(img);
                    setDisplayTitle(title);
                  }}
                />
              );
            })}
            {props.links?.map(([img, link]) => {
              return <Preview key={img} img={img} type={"link"} extra={link} />;
            })}
          </div>

          {props.imgs && (
            <i className="bottomText">
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
