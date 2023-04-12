import React, { useState } from "react";
import PropTypes from "prop-types";
const FailedIcon = ({
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
      width={size}
      height={size}
      viewBox="0 0 20 19"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ transition: "fill 0.4s", fill: filled, pointerEvents: "none" }}
        onMouseEnter={(e) => {
          if (hoverColor) setFilled(hoverColor);
        }}
        onMouseLeave={(e) => {
          setFilled(fill);
        }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.866 12.364C12.72 12.51 12.528 12.584 12.336 12.584C12.143 12.584 11.952 12.51 11.805 12.364L9.999 10.557L8.198 12.358C7.905 12.651 7.43 12.651 7.137 12.358C6.845 12.065 6.845 11.591 7.137 11.298L8.938 9.497L7.136 7.694C6.843 7.401 6.843 6.927 7.136 6.634C7.429 6.341 7.903 6.341 8.196 6.634L9.998 8.436L11.8 6.635C12.093 6.342 12.567 6.342 12.86 6.635C13.153 6.927 13.153 7.402 12.86 7.695L11.059 9.497L12.866 11.303C13.159 11.596 13.159 12.071 12.866 12.364ZM10 0C4.762 0 0.5 4.261 0.5 9.5C0.5 14.738 4.762 19 10 19C15.238 19 19.5 14.738 19.5 9.5C19.5 4.261 15.238 0 10 0Z"
        fill={fill}
      />
    </svg>
  );
};
FailedIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
  hoverScale: PropTypes.bool,
  hoverRotate: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.number,
};
export default FailedIcon;
