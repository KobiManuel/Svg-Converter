import React, { useState } from 'react';
import { parse } from 'svg-parser';


function App() {
  const [svgCode, setSvgCode] = useState('');
  const [componentCode, setComponentCode] = useState('');
  const [error, setError] = useState('');
  const [componentName, setComponentName] = useState('SvgComponent');

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
      // Validate the SVG code
      const parsedSvg = parse(svgCode);
      if (parsedSvg.tagName !== 'svg') {
        setError('Invalid SVG code');
        return;
      }

      // Transform the SVG code into a React component
      const componentCode = `import React from 'react';

const ${componentName} = () => (
  ${svgCode}
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
          <pre><code>{componentCode}</code></pre>
        </>
      )}
    </div>
  );
}

export default App;
