import React, { useState } from 'react';
// import { parse } from 'svg-parser';
import './App.css'
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow_night';



function App() {
  const [svgCode, setSvgCode] = useState('');
  const [componentCode, setComponentCode] = useState('');
  const [error, setError] = useState('');
  const [componentName, setComponentName] = useState('SvgComponent');

  function replaceFillAttribute(svgString) {
    return svgString.replace(/fill\s*=\s*"(.*?)"/g, 'fill={fill}');
  }

  const handleInputChange = (event) => {
    setSvgCode(event.target.value);
    setComponentCode('');
    setError('');
  };

  const handleNameChange = (event) => {
    setComponentName(event.target.value);
  };

  const transformSvg = () => {
    try {
      const componentCode = `import React from 'react';

      const ${componentName} = ({ fill }) => (
        ${replaceFillAttribute(svgCode)}
      );

export default ${componentName};`;
      setComponentCode(componentCode);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h1>SVG to React Component</h1>
      <p>Paste your SVG code below:</p>
      <textarea rows="10" cols="50" value={svgCode} onChange={handleInputChange}></textarea>
      <br />
      <label htmlFor="componentName">Component Name:</label>
      <input type="text" id="componentName" value={componentName} onChange={handleNameChange} />
      <br />
      <button onClick={transformSvg}>Transform SVG</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
  style={{ width: '100%', height: '200px' }}
/>

        </>
      )}
    </div>
  );
}

export default App;
