
import React,{useState} from 'react';
import PropTypes from 'prop-types';

const SvgCop = ({ fill, hoverColor,  hoverScale, hoverRotate,  onClick, size = 20 }) => {
  const [filled, setFilled] = useState(fill)
   const [transform, setTransform] = useState('none');

  return(
  <svg
            style={{ transition: "transform 1s, fill 0.4s ", fill: filled, transform: transform, cursor: "pointer" }}
            onMouseEnter={e => {
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
            onMouseLeave={e => {
              setFilled(fill);
              setTransform("scale(1)");
              setTransform("none");
            }}
            onClick={onClick}
           xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fill} class="bi bi-amd" viewBox="0 0 16 16">
<path style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z"/>
</svg>
)};
SvgCop.propTypes = {
  fill: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
  hoverScale: PropTypes.bool,
  hoverRotate: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.number
};

export default SvgCop;