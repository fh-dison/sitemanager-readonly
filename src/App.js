import React, { useState } from 'react';

import './App.css';
import DataGridDemo from './components/DataGridDemo';
import UlDemo from './components/UlDemo';
import TabsMaterialUI from './components/Tabs-MaterialUI';


// Advanced table display with builtin filtering 
// https://github.com/gregnb/mui-datatables
// Problem with Material UI Official tables is too much setup code
// https://material-ui.com/demos/tables/


function App() {
  const [showHotJSON, setShowHotJSON] = useState(true);

  return (
    <React.Fragment>
    <span style={{ float: 'center'}} >
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

//import logo from './logo.svg';
// import HotDemo from './HotDemo';
// import HotJSON from './HotJSON';
//import { TextField } from '@material-ui/core';
//import 'handsontable/dist/handsontable.full.css';