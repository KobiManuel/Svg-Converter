import React, { useState } from "react";
import PropTypes from "prop-types";
const SvgIcon = ({
  fill,
  hoverColor,
  hoverScale,
  hoverRotate,
  onClick,
  size = 20,
}) => {
  const [filled, setFilled] = useState(fill);
  const [transform, setTransform] = useState("none");
  return (
    <svg
      style={{
        transition: "transform 1s, fill 0.4s ",
        fill: filled,
        transform: transform,
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        if (hoverColor) {
          setFilled(hoverColor);
        }
        if (hoverScale) {
          setTransform("scale(1.2)");
        }
        if (hoverRotate) {
          setTransform("rotate(360deg)");
        }
      }}
      onMouseLeave={(e) => {
        setFilled(fill);
        setTransform("scale(1)");
        setTransform("none");
      }}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path
        style={{ transition: "fill 0.4s", fill: filled, pointerEvents: "none" }}
        onMouseEnter={(e) => {
          if (hoverColor) setFilled(hoverColor);
        }}
        onMouseLeave={(e) => {
          setFilled(fill);
        }}
        d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"
      />
    </svg>
  );
};
SvgIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
  hoverScale: PropTypes.bool,
  hoverRotate: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.number,
};
export default SvgIcon;
