import React, { useState } from 'react';

//import logo from './logo.svg';
import './App.css';
// import HotDemo from './HotDemo';
// import HotJSON from './HotJSON';

import DataGridDemo from './DataGridDemo';

import UlDemo from './UlDemo';

import 'handsontable/dist/handsontable.full.css';


function App() {
  const [showHotJSON, setShowHotJSON] = useState(true);

  return (
    <React.Fragment>
    <div className="App">
    <UlDemo/>
    <br/>
    <button onClick={e=>{
   //   console.log ("Toggling showHotJSON from ", showHotJSON, " to ", ! showHotJSON); 
      setShowHotJSON(! showHotJSON);  
      }} >Click to unmount [show/hide] component</button>
    <br/>
    {/* {showHotJSON && <HotJSON/>} */}

    </div>
    </React.Fragment>
    
  );
}

export default App;
//  Possible alternative fake JSON https://reqres.in/.