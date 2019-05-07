import React, { useState } from 'react';

//import logo from './logo.svg';
import './App.css';
import HotDemo from './HotDemo';
import HotJSON from './HotJSON';

import 'handsontable/dist/handsontable.full.css';


function App() {
  const [showHotJSON, setShowHotJSON] = useState(true);

  return (
    <React.Fragment>
    <div className="App">
      -- HandsonTable Demo --
    <HotDemo/>
    <br/>
    <button onClick={e=>{
   //   console.log ("Toggling showHotJSON from ", showHotJSON, " to ", ! showHotJSON); 
      setShowHotJSON(! showHotJSON);  
      }} >Click to unmount [show/hide] component</button>
    <br/>
    {showHotJSON && <HotJSON/>}

    </div>
    </React.Fragment>
    
  );
}

export default App;
//Setting NODE_PATH to resolve modules absolutely has been deprecated in favor of setting baseUrl in jsconfig.json (or tsconfig.json if you are using TypeScript) and will be removed in a future major release of create-react-app.