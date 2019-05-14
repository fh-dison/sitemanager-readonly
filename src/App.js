import React, { useState } from 'react';

//import logo from './logo.svg';
import './App.css';
// import HotDemo from './HotDemo';
// import HotJSON from './HotJSON';

 import DataGridDemo from './components/DataGridDemo';

import UlDemo from './components/UlDemo';
import TabsMaterialUI from './components/Tabs-MaterialUI';

//import DataGridDemo from './components/DataGridDemo';
import { TextField } from '@material-ui/core';

//import 'handsontable/dist/handsontable.full.css';


function App() {
  const [showHotJSON, setShowHotJSON] = useState(true);

  return (
    <React.Fragment>
    <span style={{ float: 'left'}} >
      <TabsMaterialUI Communities={<UlDemo/>} FischerSections={<DataGridDemo/>}/>

      </span>
    <div className="App">
    {/* <UlDemo/> */}
    {/* <DataGridDemo/> */}
 
    <br/>


    {/*  <button onClick={e=>{
   //   console.log ("Toggling showHotJSON from ", showHotJSON, " to ", ! showHotJSON); 
      setShowHotJSON(! showHotJSON);  
      }} >Click to unmount [show/hide] component</button>
    <br/>
   {showHotJSON && <HotJSON/>} */}

    </div>
    </React.Fragment>
    
  );
}

export default App;
//  Possible alternative fake JSON https://reqres.in/.