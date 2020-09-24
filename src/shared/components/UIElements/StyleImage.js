import React from "react";

import "./StyleImage.css";

const StyleImage = (props) => {
  return (
    <div className={`styleImage ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default StyleImage;
