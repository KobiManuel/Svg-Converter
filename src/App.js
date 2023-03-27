import React, { useState } from 'react';
import { parse } from 'svg-parser';
import './App.css';

function App() {
  const [svgCode, setSvgCode] = useState('');
  const [componentCode, setComponentCode] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setSvgCode(event.target.value);
    setComponentCode('');
    setError('');
  };

  const transformSvg = () => {
    try {
      // Validate the SVG code
      const parsedSvg = parse(svgCode);
      if (parsedSvg.tagName !== 'svg') {
        setError('Invalid SVG code');
        return;
      }

      // Transform the SVG code into a React component
      const componentCode = `import React from 'react';

const SVGComponent = () => (
  ${svgCode}
);

export default SVGComponent;`;
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
      <button onClick={transformSvg}>Transform SVG</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {componentCode && (
        <>
          <p>Preview:</p>
          <pre>{componentCode}</pre>
        </>
      )}
    </div>
  );
}

export default App;
