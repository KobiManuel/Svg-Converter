import React, { useState, useEffect } from "react";
import "./App.scss";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-cobalt";
import logo from "./images/logo2.png";

function App() {
  const [svgCode, setSvgCode] = useState("");
  const [componentCode, setComponentCode] = useState("");
  const [error, setError] = useState("");
  const [componentName, setComponentName] = useState("SvgIcon");
  const [useFill, setUseFill] = useState(true);
  const [useSize, setUseSize] = useState(true);
  const [useAnimate, setUseAnimate] = useState(true);

  useEffect(() => {
    transformSvg();
  }, [useFill, useSize, useAnimate]);

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
          <p>
            Svg + Jsx
          </p>
        </span>
      </header>
      <div className="container">
        <div className="inner-container">
          <div className="main">
      <div className="props-header">
        <p>Props:</p>
        {/* <span>
        <button onClick={() => setUseFill(!useFill)}>Color</button>
        <button onClick={() => setUseAnimate(!useAnimate)}>Animation</button>
        <button onClick={() => setUseSize(!useSize)}>Size</button>
        </span> */}
        <label className="switch" >
           <input type={"checkbox"} onClick={() => setUseFill(!useFill)} />
           <span className="slider"></span>
        </label>
      </div>
      {/* <SvgCop size={40} fill="green" hoverColor="purple" hoverScale={true} /> */}

      <div className="row">
         <div className="text-area">
         <textarea
        rows="10"
        cols="50"
        value={svgCode}
        onChange={handleInputChange}
      > 
      </textarea>
         </div>
        <div className="code-area">
        {componentCode && (
        <>
          <p>Preview:</p>
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
      )}
        </div>
      </div>
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
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
