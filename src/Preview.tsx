import "./Preview.scss";

import React from "react";

export type PreviewType = "link" | "image";

interface Props {
  img: string;
  type: PreviewType;
  extra?: string;
  onImageClick: () => void;
  smaller?: boolean;
}

function Preview({ img, type, extra, onImageClick, smaller }: Props) {
  // image or link preview
  return (
    <img
      className={smaller ? "smallerPreview" : "preview"}
      src={img}
      key={img}
      alt={img}
      onClick={() => {
        if (type === "link") {
          window.open(extra, "_blank", "noopener,noreferrer");
        } else if (type === "image") {
          onImageClick();
        }
      }}
    />
  );
}

export default Preview;
