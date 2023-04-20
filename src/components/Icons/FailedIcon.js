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
        width: size,
        height: size,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      fill="#000000"
      height="800px"
      width="800px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 222.334 222.334"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <g>
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M24.704,82.346c-2.274,0-4.117,1.842-4.117,4.117v49.581c0,2.276,1.844,4.117,4.117,4.117
c2.273,0,4.117-1.842,4.117-4.117V86.463C28.821,84.188,26.977,82.346,24.704,82.346z"
            />
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M41.173,53.525c-2.274,0-4.117,1.842-4.117,4.117v49.581c0,2.276,1.844,4.117,4.117,4.117
c2.274,0,4.117-1.842,4.117-4.117V57.642C45.29,55.367,43.447,53.525,41.173,53.525z"
            />
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M41.173,119.402c-2.274,0-4.117,1.842-4.117,4.117V173.1c0,2.276,1.844,4.117,4.117,4.117
c2.274,0,4.117-1.842,4.117-4.117v-49.581C45.29,121.244,43.447,119.402,41.173,119.402z"
            />
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M57.642,37.056c-2.274,0-4.117,1.842-4.117,4.117v49.581c0,2.276,1.844,4.117,4.117,4.117
c2.274,0,4.117-1.842,4.117-4.117V41.173C61.76,38.897,59.916,37.056,57.642,37.056z"
            />
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M57.642,102.933c-2.274,0-4.117,1.842-4.117,4.117v78.229c0,2.276,1.844,4.117,4.117,4.117
c2.274,0,4.117-1.842,4.117-4.117V107.05C61.76,104.774,59.916,102.933,57.642,102.933z"
            />
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M90.581,119.402c-2.274,0-4.117,1.842-4.117,4.117v78.229c0,2.276,1.844,4.117,4.117,4.117
c2.274,0,4.117-1.842,4.117-4.117v-78.229C94.698,121.244,92.854,119.402,90.581,119.402z"
            />
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M107.05,123.519c-2.274,0-4.117,1.842-4.117,4.117v28.821c0,2.276,1.844,4.117,4.117,4.117
c2.274,0,4.117-1.842,4.117-4.117v-28.821C111.167,125.361,109.324,123.519,107.05,123.519z"
            />
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M107.05,16.469c-2.274,0-4.117,1.842-4.117,4.117v90.581c0,2.276,1.844,4.117,4.117,4.117
c2.274,0,4.117-1.842,4.117-4.117v-90.58C111.167,18.311,109.324,16.469,107.05,16.469z"
            />
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M107.05,168.81c-2.274,0-4.117,1.842-4.117,4.117v28.821c0,2.276,1.844,4.117,4.117,4.117
c2.274,0,4.117-1.842,4.117-4.117v-28.821C111.167,170.651,109.324,168.81,107.05,168.81z"
            />
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M74.111,82.346c-2.274,0-4.117,1.842-4.117,4.117v53.525c0,2.276,1.844,4.117,4.117,4.117
c2.273,0,4.117-1.842,4.117-4.117V86.463C78.229,84.188,76.385,82.346,74.111,82.346z"
            />
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M90.581,86.463c-2.274,0-4.117,1.842-4.117,4.117v16.469c0,2.276,1.844,4.117,4.117,4.117
c2.274,0,4.117-1.842,4.117-4.117V90.581C94.698,88.305,92.854,86.463,90.581,86.463z"
            />
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M90.581,20.587c-2.274,0-4.117,1.842-4.117,4.117v49.408c0,2.276,1.844,4.117,4.117,4.117
c2.274,0,4.117-1.842,4.117-4.117V24.704C94.698,22.428,92.854,20.587,90.581,20.587z"
            />
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M74.111,152.34c-2.274,0-4.117,1.842-4.117,4.117v37.056c0,2.276,1.844,4.117,4.117,4.117
c2.273,0,4.117-1.842,4.117-4.117v-37.056C78.229,154.182,76.385,152.34,74.111,152.34z"
            />
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M74.111,28.821c-2.274,0-4.117,1.842-4.117,4.117v37.056c0,2.276,1.844,4.117,4.117,4.117
c2.273,0,4.117-1.842,4.117-4.117V32.938C78.229,30.663,76.385,28.821,74.111,28.821z"
            />
            <path
              style={{
                transition: "fill 0.4s",
                fill: filled,
                pointerEvents: "none",
              }}
              onMouseEnter={(e) => {
                if (hoverColor) setFilled(hoverColor);
              }}
              onMouseLeave={(e) => {
                setFilled(fill);
              }}
              d="M111.167,0C49.87,0,0,49.87,0,111.167s49.87,111.167,111.167,111.167s111.167-49.87,111.167-111.167S172.464,0,111.167,0
z M111.167,214.1c-56.758,0-102.933-46.175-102.933-102.933S54.409,8.235,111.167,8.235S214.1,54.409,214.1,111.167
S167.925,214.1,111.167,214.1z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
FailedIcon.propTypes = {
  fill: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverScale: PropTypes.bool,
  hoverRotate: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.number,
};
export default FailedIcon;
