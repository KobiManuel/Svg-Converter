import React, { useState } from "react";
import PropTypes from "prop-types";
const UsersIcon = ({
  fill,
  hoverColor,
  hoverScale,
  hoverRotate,
  onClick,
  size = 20,
}) => {
  const [filled, setFilled] = useState(fill);
  const [transform, setTransform] = useState("none");
  const handleMouseEnter = () => {
    hoverColor && setFilled(hoverColor);
    hoverScale && setTransform("scale(1.2)");
    hoverRotate && setTransform("rotate(360deg)");
  };
  const handleMouseLeave = (e) => {
    setFilled(fill);
    setTransform("none");
  };
  return (
    <svg
      style={{
        transition: "transform 1s, fill 0.4s ",
        fill: filled,
        transform: transform,
        cursor: "pointer",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 20 15"
      fill="none"
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
        d="M9.95752 9.61661C7.08253 9.61661 4.65674 10.0864 4.65674 11.8995C4.65674 13.7134 7.0982 14.1667 9.95752 14.1667C12.8325 14.1667 15.2583 13.6969 15.2583 11.8838C15.2583 10.0699 12.8168 9.61661 9.95752 9.61661Z"
        fill="#2C264B"
      />
      <path
        style={{ transition: "fill 0.4s", fill: filled, pointerEvents: "none" }}
        onMouseEnter={(e) => {
          if (hoverColor) setFilled(hoverColor);
        }}
        onMouseLeave={(e) => {
          setFilled(fill);
        }}
        opacity="0.4"
        d="M9.95751 7.88919C11.9043 7.88919 13.4652 6.31922 13.4652 4.36126C13.4652 2.40255 11.9043 0.833332 9.95751 0.833332C8.01075 0.833332 6.44977 2.40255 6.44977 4.36126C6.44977 6.31922 8.01075 7.88919 9.95751 7.88919Z"
        fill="#2C264B"
      />
      <path
        style={{ transition: "fill 0.4s", fill: filled, pointerEvents: "none" }}
        onMouseEnter={(e) => {
          if (hoverColor) setFilled(hoverColor);
        }}
        onMouseLeave={(e) => {
          setFilled(fill);
        }}
        opacity="0.4"
        d="M17.5733 5.18272C18.077 3.20149 16.6003 1.42215 14.72 1.42215C14.5155 1.42215 14.32 1.44466 14.129 1.48293C14.1036 1.48894 14.0753 1.50169 14.0603 1.52421C14.0432 1.55273 14.0559 1.591 14.0745 1.61577C14.6394 2.41276 14.964 3.38311 14.964 4.42475C14.964 5.42287 14.6662 6.35344 14.1439 7.12567C14.0902 7.20522 14.1379 7.31253 14.2327 7.32904C14.364 7.35231 14.4983 7.36432 14.6356 7.36807C16.0049 7.40409 17.2338 6.51779 17.5733 5.18272Z"
        fill="#2C264B"
      />
      <path
        style={{ transition: "fill 0.4s", fill: filled, pointerEvents: "none" }}
        onMouseEnter={(e) => {
          if (hoverColor) setFilled(hoverColor);
        }}
        onMouseLeave={(e) => {
          setFilled(fill);
        }}
        d="M19.0077 9.84745C18.757 9.31012 18.1519 8.94164 17.2318 8.76078C16.7976 8.65421 15.6223 8.50412 14.5292 8.52438C14.5128 8.52663 14.5038 8.53789 14.5023 8.54539C14.5001 8.5559 14.5046 8.57391 14.5262 8.58517C15.0314 8.83657 16.9841 9.93 16.7386 12.2362C16.7282 12.336 16.808 12.4223 16.9073 12.4073C17.3878 12.3382 18.6242 12.0711 19.0077 11.2388C19.2196 10.799 19.2196 10.288 19.0077 9.84745Z"
        fill="#2C264B"
      />
      <path
        style={{ transition: "fill 0.4s", fill: filled, pointerEvents: "none" }}
        onMouseEnter={(e) => {
          if (hoverColor) setFilled(hoverColor);
        }}
        onMouseLeave={(e) => {
          setFilled(fill);
        }}
        opacity="0.4"
        d="M5.87063 1.48316C5.68036 1.44413 5.48412 1.42237 5.27967 1.42237C3.39932 1.42237 1.92265 3.20172 2.42706 5.18294C2.76582 6.51802 3.99476 7.40431 5.36398 7.36829C5.50128 7.36454 5.63634 7.35178 5.76691 7.32927C5.86168 7.31276 5.90943 7.20544 5.85571 7.12589C5.33339 6.35292 5.03567 5.42309 5.03567 4.42498C5.03567 3.38258 5.361 2.41223 5.92585 1.61599C5.94376 1.59123 5.95719 1.55295 5.93928 1.52443C5.92436 1.50117 5.89675 1.48916 5.87063 1.48316Z"
        fill="#2C264B"
      />
      <path
        style={{ transition: "fill 0.4s", fill: filled, pointerEvents: "none" }}
        onMouseEnter={(e) => {
          if (hoverColor) setFilled(hoverColor);
        }}
        onMouseLeave={(e) => {
          setFilled(fill);
        }}
        d="M2.76794 8.76055C1.84792 8.94141 1.24352 9.30989 0.992807 9.84722C0.780148 10.2877 0.780148 10.7988 0.992807 11.2393C1.37634 12.0708 2.61274 12.3388 3.09327 12.4071C3.19251 12.4221 3.27161 12.3365 3.26116 12.2359C3.01567 9.93052 4.96839 8.8371 5.4743 8.58569C5.49519 8.57369 5.49967 8.55643 5.49743 8.54517C5.49594 8.53766 5.48773 8.52641 5.47131 8.52491C4.37743 8.50389 3.20296 8.65399 2.76794 8.76055Z"
        fill="#2C264B"
      />
    </svg>
  );
};
UsersIcon.propTypes = {
  fill: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverScale: PropTypes.bool,
  hoverRotate: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.number,
};
export default UsersIcon;
