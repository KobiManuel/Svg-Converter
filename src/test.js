
import React,{useState} from 'react';
import PropTypes from 'prop-types';

const SvgIcon = ({ fill, hoverColor,  hoverScale, hoverRotate,  onClick, size = 20 }) => {
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
           width={size} height={size} viewBox="0 0 20 19" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} fillRule="evenodd" clipRule="evenodd" d="M13.993 7.722L9.375 12.34C9.228 12.487 9.037 12.56 8.845 12.56C8.652 12.56 8.461 12.487 8.314 12.34L6.005 10.031C5.712 9.738 5.712 9.263 6.005 8.97C6.298 8.677 6.772 8.677 7.065 8.97L8.845 10.749L12.932 6.661C13.225 6.368 13.7 6.368 13.993 6.661C14.286 6.954 14.286 7.429 13.993 7.722ZM10 0C4.762 0 0.5 4.262 0.5 9.5C0.5 14.739 4.762 19 10 19C15.238 19 19.5 14.739 19.5 9.5C19.5 4.262 15.238 0 10 0Z" fill={fill}/>
</svg>

)};
SvgIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
  hoverScale: PropTypes.bool,
  hoverRotate: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.number
};

export default SvgIcon;