import React, { useState } from 'react';

import './App.css';
import FischerSections from './components/FischerSections';
import LegalSections from './components/LegalSections';
import Sites from './components/Sites';
import Communities from './components/Communities';
import TabsMaterialUI from './components/Tabs-MaterialUI';

import GlobalState from './context/GlobalState';
import FakeOAuth from './lib/FakeOauth';

FakeOAuth();
console.info (window.sessionStorage.accessToken);

//import { italic } from 'ansi-colors';


// Advanced table display with builtin filtering 
// https://github.com/gregnb/mui-datatables
// Problem with Material UI Official tables is too much setup code
// https://material-ui.com/demos/tables/


function App() {
 // const [showHotJSON, setShowHotJSON] = useState(true);

  return (
    <GlobalState>
    <h3 style={{display: 'inline'}}>  Land Ops Home </h3>    View Mode 
    <span style={{ float: 'center'}} >
      <TabsMaterialUI 
      Communities={<Communities/>} 
      FischerSections={<FischerSections/>}
      LegalSections={<LegalSections/>}
      Sites={<Sites/>}
      />

    </span>
    <div className="App">

    <br/>
     
    </div>
    </GlobalState>
    
  );
}

export default App;

//  Possible alternative fake JSON https://reqres.in/.

 