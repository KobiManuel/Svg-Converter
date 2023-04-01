import React, { useState, useEffect } from "react";
import "./App.scss";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-cobalt";
import copy from "copy-to-clipboard";
import logo from "./images/logo3.png";
import folder from "./images/logo3.png";
import Button from "./components/Button";
import CheckCirlce from "./components/Check-circle";
import CopyIcon from "./components/Copy-icon";

function App() {
  const [svgCode, setSvgCode] = useState("");
  const [componentCode, setComponentCode] = useState("");
  const [error, setError] = useState("");
  const [componentName, setComponentName] = useState("SvgIcon");
  const [useFill, setUseFill] = useState(true);
  const [useSize, setUseSize] = useState(true);
  const [useAnimate, setUseAnimate] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    if (svgCode.trim() !== "") {
      setModal(false);
    } else {
      setModal(true);
    }
    transformSvg();
    if (copySuccess) {
      setTimeout(() => {
        setCopySuccess(false);
      }, 3000);
    }
  }, [useFill, useSize, useAnimate, copySuccess, svgCode]);

  // function replaceFillAttribute(svgString) {
  //   const svgWithFill = svgString.replace(/fill\s*=\s*"(.*?)"/g, 'fill={fill}');
  //   return svgWithFill.replace(/<svg/g, '<svg onMouseEnter={e => { if (hoverColor) e.target.style.fill = hoverColor; if (hoverAnimate) e.target.style.transition = "transform 5s ease-in-out"; e.target.style.transform = "rotateX(180deg)"; onMouseLeave={e => { e.target.style.fill = fill; e.target.style.transition = "none"; e.target.style.transform = "none"; }} ');
  // }
  function replaceFillAttribute(svgString) {
    const hasWidthOrHeight =
      /(?<=\s)width\s*=\s*"(.*?)"|(?<=\s)height\s*=\s*"(.*?)"/g.test(svgString);
    if (useFill && useSize && useAnimate && !hasWidthOrHeight) {
      const svgWithFill = svgString
        .replace(/fill\s*=\s*"(.*?)"/g, "fill={fill}")
        .replace(/(?<=\s)width\s*=\s*"(.*?)"/g, "width={size}")
        .replace(/(?<=\s)height\s*=\s*"(.*?)"/g, "height={size}")
        .replace(
          /<path\s/g,
          '<path style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<circle\s/g,
          '<circle style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<rect\s/g,
          '<rect style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<line\s/g,
          '<line style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<polyline\s/g,
          '<polyline style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<polygon\s/g,
          '<polygon style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<ellipse\s/g,
          '<ellipse style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');

      return svgWithFill.replace(
        /<svg/g,
        `<svg
          style={{ width: size, transition: "transform 1s, fill 0.4s ", fill: filled, transform: transform, cursor: "pointer" }}
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
    } else if (!useFill && useSize && useAnimate && !hasWidthOrHeight) {
      const svgWithFill = svgString
        .replace(/<path\s/g, '<path style={{pointerEvents: "none"}} ')
        .replace(/<circle\s/g, '<circle style={{pointerEvents: "none"}} ')
        .replace(/<rect\s/g, '<rect style={{pointerEvents: "none"}} ')
        .replace(/<line\s/g, '<line style={{pointerEvents: "none"}} ')
        .replace(/<polyline\s/g, '<polyline style={{pointerEvents: "none"}} ')
        .replace(/<polygon\s/g, '<polygon style={{pointerEvents: "none"}} ')
        .replace(/<ellipse\s/g, '<ellipse style={{pointerEvents: "none"}} ')
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');

      return svgWithFill.replace(
        /<svg/g,
        `<svg
            style={{ width: size, transition: "transform 1s", transform: transform, cursor: "pointer" }}
            onMouseEnter={e => {
              if (hoverScale) {
                setTransform("scale(1.2)");
              }
              if (hoverRotate) {
                setTransform("rotate(360deg)");
              }
            }}
            onMouseLeave={e => {
              setTransform("scale(1)");
              setTransform("none");
            }}
            onClick={onClick}
          `
      );
    } else if (useFill && useSize && !useAnimate && !hasWidthOrHeight) {
      const svgWithFill = svgString
        .replace(/fill\s*=\s*"(.*?)"/g, "fill={fill}")
        .replace(
          /<path\s/g,
          '<path style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<circle\s/g,
          '<circle style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<rect\s/g,
          '<rect style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<line\s/g,
          '<line style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<polyline\s/g,
          '<polyline style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<polygon\s/g,
          '<polygon style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<ellipse\s/g,
          '<ellipse style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');

      return svgWithFill.replace(
        /<svg/g,
        `<svg
              style={{ width: size, transition: "fill 0.4s ", fill: filled }}
              onMouseEnter={e => {
                if (hoverColor) {
                  setFilled(hoverColor);
                }
              }}
              onMouseLeave={e => {
                setFilled(fill);
              }}
              onClick={onClick}
            `
      );
    } else if (!useFill && useSize && !useAnimate && !hasWidthOrHeight) {
      const svgWithFill = svgString
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');

      return svgWithFill.replace(
        /<svg/g,
        `<svg
                style={{ width: size }}
              `
      );
    } else if (useFill && useSize && useAnimate) {
      const svgWithFill = svgString
        .replace(/fill\s*=\s*"(.*?)"/g, "fill={fill}")
        .replace(/(?<=\s)width\s*=\s*"(.*?)"/g, "width={size}")
        .replace(/(?<=\s)height\s*=\s*"(.*?)"/g, "height={size}")
        .replace(
          /<path\s/g,
          '<path style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<circle\s/g,
          '<circle style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<rect\s/g,
          '<rect style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<line\s/g,
          '<line style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<polyline\s/g,
          '<polyline style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<polygon\s/g,
          '<polygon style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<ellipse\s/g,
          '<ellipse style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');

      return svgWithFill.replace(
        /<svg/g,
        `<svg
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
                `
      );
    } else if (!useFill && useAnimate && useSize) {
      const svgWithFill = svgString
        .replace(/(?<=\s)width\s*=\s*"(.*?)"/g, "width={size}")
        .replace(/(?<=\s)height\s*=\s*"(.*?)"/g, "height={size}")
        .replace(/<path\s/g, '<path style={{pointerEvents: "none"}}  ')
        .replace(/<circle\s/g, '<circle style={{fillpointerEvents: "none"}} ')
        .replace(/<rect\s/g, '<rect style={{pointerEvents: "none"}} ')
        .replace(/<line\s/g, '<line style={{pointerEvents: "none"}} ')
        .replace(/<polyline\s/g, '<polyline style={{pointerEvents: "none"}} ')
        .replace(/<polygon\s/g, '<polygon style={{pointerEvents: "none"}} ')
        .replace(/<ellipse\s/g, '<ellipse style={{pointerEvents: "none"}} ')
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');

      return svgWithFill.replace(
        /<svg/g,
        `<svg
        style={{ transition: "transform 1s", transform: transform, cursor: "pointer" }}
        onMouseEnter={e => {
          if (hoverScale) {
            setTransform("scale(1.2)");
          }
          if (hoverRotate) {
            setTransform("rotate(360deg)");
          }
        }}
        onMouseLeave={e => {
          setTransform("scale(1)");
          setTransform("none");
        }}
        onClick={onClick}
      `
      );
    } else if (!useFill && !useAnimate && useSize) {
      const svgWithFill = svgString
        .replace(/(?<=\s)width\s*=\s*"(.*?)"/g, "width={size}")
        .replace(/(?<=\s)height\s*=\s*"(.*?)"/g, "height={size}")
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');

      return svgWithFill.replace(
        /<svg/g,
        `<svg
        onClick={onClick}
      `
      );
    } else if (!useFill && useAnimate && !useSize) {
      const svgWithFill = svgString
        .replace(/<path\s/g, '<path style={{pointerEvents: "none"}}  ')
        .replace(/<circle\s/g, '<circle style={{fillpointerEvents: "none"}} ')
        .replace(/<rect\s/g, '<rect style={{pointerEvents: "none"}} ')
        .replace(/<line\s/g, '<line style={{pointerEvents: "none"}} ')
        .replace(/<polyline\s/g, '<polyline style={{pointerEvents: "none"}} ')
        .replace(/<polygon\s/g, '<polygon style={{pointerEvents: "none"}} ')
        .replace(/<ellipse\s/g, '<ellipse style={{pointerEvents: "none"}} ')
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');

      return svgWithFill.replace(
        /<svg/g,
        `<svg
        style={{ transition: "transform 1s", transform: transform, cursor: "pointer" }}
        onMouseEnter={e => {
          if (hoverScale) {
            setTransform("scale(1.2)");
          }
          if (hoverRotate) {
            setTransform("rotate(360deg)");
          }
        }}
        onMouseLeave={e => {
          setTransform("scale(1)");
          setTransform("none");
        }}
        onClick={onClick}
      `
      );
    } else if (!useAnimate && useFill && useSize) {
      const svgWithFill = svgString
        .replace(/fill\s*=\s*"(.*?)"/g, "fill={fill}")
        .replace(/(?<=\s)width\s*=\s*"(.*?)"/g, "width={size}")
        .replace(/(?<=\s)height\s*=\s*"(.*?)"/g, "height={size}")
        .replace(
          /<path\s/g,
          '<path style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<circle\s/g,
          '<circle style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<rect\s/g,
          '<rect style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<line\s/g,
          '<line style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<polyline\s/g,
          '<polyline style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<polygon\s/g,
          '<polygon style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<ellipse\s/g,
          '<ellipse style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');

      return svgWithFill.replace(
        /<svg/g,
        `<svg
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
      `
      );
    } else if (!useAnimate && !useFill && useSize) {
      const svgWithFill = svgString
        .replace(/(?<=\s)width\s*=\s*"(.*?)"/g, "width={size}")
        .replace(/(?<=\s)height\s*=\s*"(.*?)"/g, "height={size}")
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');

      return svgWithFill.replace(
        /<svg/g,
        `<svg
        onClick={onClick}
      `
      );
    } else if (!useAnimate && useFill && !useSize) {
      const svgWithFill = svgString
        .replace(/fill\s*=\s*"(.*?)"/g, "fill={fill}")
        .replace(
          /<path\s/g,
          '<path style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<circle\s/g,
          '<circle style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<rect\s/g,
          '<rect style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<line\s/g,
          '<line style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<polyline\s/g,
          '<polyline style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<polygon\s/g,
          '<polygon style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<ellipse\s/g,
          '<ellipse style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');

      return svgWithFill.replace(
        /<svg/g,
        `<svg
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
      `
      );
    } else if (!useSize && useFill && useAnimate) {
      const svgWithFill = svgString
        .replace(/fill\s*=\s*"(.*?)"/g, "fill={fill}")
        .replace(
          /<path\s/g,
          '<path style={{transition: "fill 0.4s ", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<circle\s/g,
          '<circle style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<rect\s/g,
          '<rect style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<line\s/g,
          '<line style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<polyline\s/g,
          '<polyline style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<polygon\s/g,
          '<polygon style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<ellipse\s/g,
          '<ellipse style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');

      return svgWithFill.replace(
        /<svg/g,
        `<svg
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
      `
      );
    } else if (!useSize && !useFill && useAnimate) {
      const svgWithFill = svgString
        .replace(/<path\s/g, '<path style={{pointerEvents: "none"}} ')
        .replace(/<circle\s/g, '<circle style={{fillpointerEvents: "none"}} ')
        .replace(/<rect\s/g, '<rect style={{pointerEvents: "none"}} ')
        .replace(/<line\s/g, '<line style={{pointerEvents: "none"}} ')
        .replace(/<polyline\s/g, '<polyline style={{pointerEvents: "none"}} ')
        .replace(/<polygon\s/g, '<polygon style={{pointerEvents: "none"}} ')
        .replace(/<ellipse\s/g, '<ellipse style={{pointerEvents: "none"}} ')
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');

      return svgWithFill.replace(
        /<svg/g,
        `<svg
        style={{ transition: "transform 1s", transform: transform, cursor: "pointer" }}
        onMouseEnter={e => {
          if (hoverScale) {
            setTransform("scale(1.2)");
          }
          if (hoverRotate) {
            setTransform("rotate(360deg)");
          }
        }}
        onMouseLeave={e => {
          setTransform("scale(1)");
          setTransform("none");
        }}
        onClick={onClick}
      `
      );
    } else if (!useSize && useFill && !useAnimate) {
      const svgWithFill = svgString
        .replace(/fill\s*=\s*"(.*?)"/g, "fill={fill}")
        .replace(
          /<path\s/g,
          '<path style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<circle\s/g,
          '<circle style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<rect\s/g,
          '<rect style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<line\s/g,
          '<line style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<polyline\s/g,
          '<polyline style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<polygon\s/g,
          '<polygon style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(
          /<ellipse\s/g,
          '<ellipse style={{transition: "fill 0.4s", fill: filled, pointerEvents: "none"}} onMouseEnter={e => {if (hoverColor) setFilled(hoverColor);}} onMouseLeave={e => {setFilled(fill);}} '
        )
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');

      return svgWithFill.replace(
        /<svg/g,
        `<svg
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
      `
      );
    } else if (!useFill && !useSize && !useAnimate) {
      const svgWithFill = svgString
        .replace(/clip-rule="/g, 'clipRule="')
        .replace(/fill-rule="/g, 'fillRule="');
      return svgWithFill;
    }
  }

  const handleInputChange = (event) => {
    setSvgCode(event.target.value);
    setComponentCode("");
    setError("");
  };

  const handleNameChange = (event) => {
    setComponentName(event.target.value);
  };

  const handleCopyClick = () => {
    copy(componentCode);
    setCopySuccess(true);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setSvgCode(event.target.result);
    };
    reader.readAsText(file);
  };

  const handleDragDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setSvgCode(event.target.result);
    };
    reader.readAsText(file);
  };

  const Size = useSize ? "size = 20" : "";
  const Animate = useAnimate ? "hoverScale, hoverRotate, " : "";
  const Fill = useFill ? "fill, hoverColor, " : "";

  const fillState = useFill ? "const [filled, setFilled] = useState(fill)" : "";
  const animateState = useAnimate
    ? " const [transform, setTransform] = useState('none');"
    : "";
  const state = useFill || useAnimate ? ",{useState}" : "";

  const fillPropType = useFill ? "fill: PropTypes.string.isRequired," : "";
  const hoverColorPropType = useFill ? "hoverColor: PropTypes.string," : "";
  const hoverScalePropType = useAnimate ? "hoverScale: PropTypes.bool," : "";
  const hoverRotatePropType = useAnimate ? "hoverRotate: PropTypes.bool," : "";
  const sizePropType = useSize ? "size: PropTypes.number" : "";

  const transformSvg = () => {
    try {
      if (svgCode.trim() === "") {
        throw new Error("SVG code cannot be empty");
      }

      if (
        !svgCode.trim().startsWith("<svg") ||
        !svgCode.trim().endsWith("</svg>")
      ) {
        throw new Error("Invalid svg format");
      }

      const componentCode = `
      import React${state} from 'react';
      import PropTypes from 'prop-types';

      const ${componentName} = ({ ${Fill} ${Animate} onClick, ${Size} }) => {
        ${fillState}
        ${animateState}

        return(
        ${replaceFillAttribute(svgCode)}
      )};
      ${componentName}.propTypes = {
        ${fillPropType}
        ${hoverColorPropType}
        ${hoverScalePropType}
        ${hoverRotatePropType}
        onClick: PropTypes.func,
        ${sizePropType}
      };

export default ${componentName};`;
      setComponentCode(componentCode);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="svgConverter">
      <header>
        <span>
          <img src={logo} alt="/" />
          <p>Svg + Jsx</p>
        </span>
      </header>
      <div className="container">
        <div className="inner-container">
          <h2>
            <svg
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h48v48h-48z" fill="none" />
              <path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z" />
            </svg>
            Convert Svg icons to React Component
          </h2>
          <p className="info-message">
            <svg
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h48v48h-48z" fill="none" />
              <path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z" />
            </svg>
            Props are enabled by default{" "}
          </p>
          <p className="info-message">
            <svg
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h48v48h-48z" fill="none" />
              <path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z" />
            </svg>
            Made for icons only
          </p>
          <div className="main">
            <div className="props-header">
              <p>Props:</p>
              <label>
                {" "}
                Fill: <Button onClick={() => setUseFill(!useFill)} />{" "}
              </label>
              <label>
                {" "}
                Animation: <Button
                  onClick={() => setUseAnimate(!useAnimate)}
                />{" "}
              </label>
              <label>
                {" "}
                Size: <Button onClick={() => setUseSize(!useSize)} />{" "}
              </label>
            </div>
            {/* <SvgCop size={40} fill="green" hoverColor="purple" hoverScale={true} /> */}

            <div className="row">
              <div className="text-area">
                <textarea
                  autoFocus
                  rows="10"
                  cols="50"
                  placeholder="Paste your svg text here"
                  value={svgCode}
                  onChange={handleInputChange}
                  draggable="false"
                  style={{
                    color: "navy",
                  }}
                ></textarea>
                {modal ? (
                  <div className="upload-card">
                    <div className="upload-card-inner">
                      <div className="folder">
                        <img src={folder} alt="/" />
                      </div>
                      <div
                        onDrop={handleDragDrop}
                        onDragOver={(event) => event.preventDefault()}
                      >
                        Drag and drop your svg icon file here to transform
                      </div>
                      <h6>OR</h6>

                      <label
                        for="browseFiles"
                        className="upload-btn"
                        style={{ cursor: "pointer" }}
                      >
                        Browse Files
                        <input
                          id="browseFiles"
                          type="file"
                          accept=".svg"
                          onChange={handleFileUpload}
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="transform-container">
                  <label htmlFor="componentName">
                    Component Name:
                    <input
                      className="component-name"
                      type="text"
                      id="componentName"
                      value={componentName}
                      onChange={handleNameChange}
                    />
                  </label>
                  <span className="error-container">
                    <button className="button" onClick={transformSvg}>
                      Transform SVG
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                    {error ? (<pre style={{ color: "red" }}>{error}</pre>) : ""}
                  </span>
                </div>
              </div>
              <div className="code-area">
                <>
                  <span className="copy-span">
                    Preview:{" "}
                    <button className="copy-btn" onClick={handleCopyClick}>
                      {copySuccess ? (
                        <CheckCirlce fill="#318d1f" size={25} />
                      ) : (
                        <CopyIcon fill="#002240" size={25} />
                      )}
                      {copySuccess ? "Copied" : "Copy Code"}
                    </button>
                  </span>
                  <AceEditor
                    mode="javascript"
                    theme="cobalt"
                    value={componentCode}
                    readOnly={true}
                    setOptions={{ useWorker: false }}
                    editorProps={{ $blockScrolling: true }}
                    style={{ width: "100%", height: "100%" }}
                  />
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
