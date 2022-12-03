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
  const [displayImg, setDisplayImg] = useState("");
  const [displayTitle, setDisplayTitle] = useState("");
  const [limittingDimension, setLimittingDimension] = useState("");

  return (
    <>
      <Modal className="modal" isOpen={openModal}>
        <ImageModal
          displayImg={displayImg}
          title={displayTitle}
          limittingDimension={limittingDimension}
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
            {props.imgs?.map(([img, title, limittingDimension = "height"]) => {
              return (
                <Preview
                  key={img}
                  img={img}
                  altText={title}
                  type={"image"}
                  extra={title}
                  onImageClick={() => {
                    setOpenModal(true);
                    setDisplayImg(img);
                    setDisplayTitle(title);
                    setLimittingDimension(limittingDimension);
                  }}
                />
              );
            })}
          </div>
          <div className="rowImg">
            {props.links?.map(([img, link]) => {
              return (
                <Preview
                  key={img}
                  img={img}
                  type={"link"}
                  extra={link}
                  smaller={true}
                />
              );
            })}
          </div>
          {props.imgs && (
            <i className="bottomText">{"click images to enlarge"}</i>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
