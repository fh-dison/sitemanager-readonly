import React from 'react';
import logo from './logo.svg';
import './App.css';
import HotDemo from './HotDemo';
import HotJSON from './HotJSON';

import 'handsontable/dist/handsontable.full.css';


function App() {
  return (
    <React.Fragment>
    <div className="App">
{/*      <header className="App-header">
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
        </a>
      </header>*/}
      -- HandsonTable Demo --

    </div>
    <HotDemo/>
    <br/>
    <HotJSON/>
    </React.Fragment>
  );
}

export default App;
//Setting NODE_PATH to resolve modules absolutely has been deprecated in favor of setting baseUrl in jsconfig.json (or tsconfig.json if you are using TypeScript) and will be removed in a future major release of create-react-app.