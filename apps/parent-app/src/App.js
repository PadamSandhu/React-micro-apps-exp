import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [divHtml, setDivHtml] = useState(
    '<div id="page-1-section"> Padam Hello </div>'
  );
  useEffect(() => {
    axios.get('/page-1').then((response) => {
      console.log('res', response);
      const { data = '' } = response;
      const doc = new DOMParser().parseFromString(data, 'text/html');
      [...doc.getElementsByTagName('script')].forEach((incomingScript) => {
        const script = document.createElement('script');
        const url = new URL(incomingScript.src);
        console.log(url.pathname);
        script.src = 'http://localhost:3002/' + url.pathname;
        script.async = true;
        document.body.appendChild(script);
      });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* <embed 
          src="http://localhost:3002/"
          width="200"
          height="200"
          onerror="alert('URL invalid !!');"
        />
        <object
          data="http://localhost:3002/"
          width="400"
          height="300"
          type="text/html"
        >
          Alternative Content
        </object> */}
        <div id="page-1-section">Hello </div>
        <div dangerouslySetInnerHTML={{ __html: divHtml }}></div>
        <div id="counter-app"></div>
        <div id="page-1"></div>
      </header>
    </div>
  );
}

export default App;
