
import React,{ useState } from 'react';
import PropTypes from 'prop-types';

const SvgCop = ({ fill, hoverColor,   onClick,  }) => {
  const [filled, setFilled] = useState(' ')
  

  return(
  <svg
  style={{ transition: "fill 0.4s", fill: filled }}
  onMouseEnter={e => {
    if (hoverColor) {
      setFilled(hoverColor);
    }
  }}
  onMouseLeave={e => {
    setFilled(fill);
  }}
  onClick={onClick}
 version="1.1" xmlns="http://www.w3.org/2000/svg">
<circle style={{ transition: "fill 0.4s", fill: filled }} cx="100" cy="100" r="50"></circle>
</svg>
)};
SvgCop.propTypes = {
  fill: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
  
  
  onClick: PropTypes.func,
  
};

export default SvgCop;