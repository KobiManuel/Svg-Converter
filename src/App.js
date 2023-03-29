import React, { useState } from "react";
// import { parse } from 'svg-parser';
import "./App.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import SvgCop from "./test";

function App() {
  const [svgCode, setSvgCode] = useState("");
  const [componentCode, setComponentCode] = useState("");
  const [error, setError] = useState("");
  const [componentName, setComponentName] = useState("SvgComponent");

  // function replaceFillAttribute(svgString) {
  //   const svgWithFill = svgString.replace(/fill\s*=\s*"(.*?)"/g, 'fill={fill}');
  //   return svgWithFill.replace(/<svg\s/g, '<svg onMouseEnter={e => { if (hoverColor) e.target.style.fill = hoverColor; if (hoverAnimate) e.target.style.transition = "transform 5s ease-in-out"; e.target.style.transform = "rotateX(180deg)"; onMouseLeave={e => { e.target.style.fill = fill; e.target.style.transition = "none"; e.target.style.transform = "none"; }} ');
  // }
  function replaceFillAttribute(svgString) {
    const svgWithFill = svgString
      .replace(/fill\s*=\s*"(.*?)"/g, "fill={fill}")
      .replace(/width\s*=\s*"(.*?)"/g, "width={size}")
      .replace(/height\s*=\s*"(.*?)"/g, "height={size}")
      .replace(
        /<path\s/g,
        '<path style={{transition: "transform 1s, fill 0.4s ", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
      )
      .replace(/clip-rule="/g, 'clipRule="')
      .replace(/fill-rule="/g, 'fillRule="');

    return svgWithFill.replace(
      /<svg\s/g,
      `<svg
        style={{ transition: "transform 1s, fill 0.4s ", fill: filled, transform: transform }}
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
      `
    );
  }

  const handleInputChange = (event) => {
    setSvgCode(event.target.value);
    setComponentCode("");
    setError("");
  };

  const handleNameChange = (event) => {
    setComponentName(event.target.value);
  };

  const transformSvg = () => {
    try {
      if (svgCode.trim() === "") {
        throw new Error("SVG code cannot be empty");
      }

      if (
        !svgCode.trim().startsWith("<svg") ||
        !svgCode.trim().endsWith("</svg>")
      ) {
        throw new Error("SVG code must start with <svg> and end with </svg>");
      }

      const componentCode = `
      import React,{ useState } from 'react';
      import PropTypes from 'prop-types';

      const ${componentName} = ({ fill, hoverColor, hoverScale, hoverRotate, onClick, size = 20 }) => {
        const [filled, setFilled] = useState("green");
        const [transform, setTransform] = useState("none");

        return(
        ${replaceFillAttribute(svgCode)}
      )};
      ${componentName}.propTypes = {
        fill: PropTypes.string.isRequired,
        hoverColor: PropTypes.string,
        hoverScale: PropTypes.bool,
        hoverRotate: PropTypes.bool,
        onClick: PropTypes.func,
        size: PropTypes.number
      };

export default ${componentName};`;
      setComponentCode(componentCode);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div style={{ paddingTop: 40, paddingLeft: 40 }}>
      <SvgCop fill="green" hoverColor="purple" hoverRotate={true} size={40} />
      <h1>SVG to React Component</h1>
      <p>Paste your SVG code below:</p>
      <textarea
        rows="10"
        cols="50"
        value={svgCode}
        onChange={handleInputChange}
      ></textarea>
      <br />
      <label htmlFor="componentName">Component Name:</label>
      <input
        type="text"
        id="componentName"
        value={componentName}
        onChange={handleNameChange}
      />
      <br />
      <button onClick={transformSvg}>Transform SVG</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {componentCode && (
        <>
          <p>Preview:</p>
          <AceEditor
            mode="javascript"
            theme="tomorrow_night"
            value={componentCode}
            readOnly={true}
            setOptions={{ useWorker: false }}
            editorProps={{ $blockScrolling: true }}
            style={{ width: "100%", height: "200px" }}
          />
        </>
      )}
    </div>
  );
}

export default App;
