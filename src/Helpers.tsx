import React from "react";

export const makeLink = (text: string, link: string) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};
