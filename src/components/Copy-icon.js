
import React,{useState} from 'react';
import PropTypes from 'prop-types';

const CopyIcon = ({ fill, hoverColor,   onClick, size = 20 }) => {
  const [filled, setFilled] = useState(fill)
  

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
 width={size} height={size} viewBox="0 0 16 16" fill={fill} xmlns="http://www.w3.org/2000/svg">
<path style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} fillRule="evenodd" clipRule="evenodd" d="M2.77694 2.23897C3.22117 1.76175 3.84977 1.5 4.57718 1.5H8.04193C8.68333 1.5 9.24873 1.70147 9.67967 2.07935C10.1091 2.45587 10.3737 2.97994 10.4656 3.57221C10.5079 3.84509 10.321 4.10061 10.0481 4.14291C9.7752 4.18521 9.51967 3.99829 9.4774 3.72541C9.4166 3.33341 9.2506 3.03307 9.0204 2.83125C8.7918 2.6308 8.46873 2.5 8.04193 2.5H4.57718C4.09841 2.5 3.74506 2.66661 3.50889 2.92033C3.26905 3.17797 3.11328 3.56573 3.11328 4.06699V8.53027C3.11328 8.98693 3.24317 9.34987 3.44735 9.60407C3.6483 9.85427 3.94371 10.0282 4.33819 10.0771C4.61223 10.1111 4.80684 10.3609 4.77285 10.6349C4.73887 10.9089 4.48916 11.1035 4.21512 11.0695C3.5764 10.9903 3.04012 10.694 2.66769 10.2303C2.29848 9.7706 2.11328 9.17607 2.11328 8.53027V4.06699C2.11328 3.35799 2.33637 2.71225 2.77694 2.23897Z" fill={fill}/>
<path style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} fillRule="evenodd" clipRule="evenodd" d="M6.1598 5.64625C6.60417 5.16965 7.2328 4.90881 7.96 4.90881H11.4236C12.1525 4.90881 12.7814 5.16941 13.2256 5.64653C13.666 6.1196 13.8875 6.76489 13.8875 7.47289V11.9362C13.8875 12.6442 13.666 13.2894 13.2255 13.7626C12.7812 14.2397 12.1521 14.5002 11.423 14.5002H7.96C7.23107 14.5002 6.60219 14.2396 6.15801 13.7625C5.71761 13.2894 5.49609 12.6442 5.49609 11.9362V7.47289C5.49609 6.76416 5.71905 6.11899 6.1598 5.64625ZM6.8912 6.32819C6.65171 6.58508 6.49609 6.97189 6.49609 7.47289V11.9362C6.49609 12.4378 6.65111 12.8246 6.88993 13.0811C7.125 13.3336 7.47807 13.5002 7.96 13.5002H11.423C11.9053 13.5002 12.2585 13.3336 12.4936 13.0811C12.7325 12.8246 12.8875 12.4378 12.8875 11.9362V7.47289C12.8875 6.97123 12.7325 6.58446 12.4937 6.32791C12.2586 6.07541 11.9055 5.90881 11.4236 5.90881H7.96C7.48047 5.90881 7.12713 6.07518 6.8912 6.32819Z" fill={fill}/>
</svg>   
)};
CopyIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
  
  
  onClick: PropTypes.func,
  size: PropTypes.number
};

export default CopyIcon;