import React from 'react';

import './App.css';

import Authenticator from './components/Authenticator';
import FischerSections from './components/FischerSections';
import LegalSections from './components/LegalSections';
import Sites from './components/Sites';
import Communities from './components/Communities';
import TabsMaterialUI from './components/Tabs-MaterialUI';
import Store from './context/Store';


//import Idle from 'react-user-idle';


// setInterval (()=>{
//   console.info ("Faking renewal of access token");
// }, 15 * 1000);


function App() {

  return (
    <Store>
      <Authenticator></Authenticator>
{/*       <Idle
      timeout={10}
      throttle={5}
      onChange={()=>{console.log('Idle change..')}}
    >
      {
        idle => idle && 'idle'
      } 
    </Idle> */}

      <h3 style={{ display: 'inline' }}>  Land Ops Home  </h3>    View Mode 
      <span style={{ float: 'center' }} >
        <TabsMaterialUI
          Communities={<Communities />}
          FischerSections={<FischerSections />}
          LegalSections={<LegalSections />}
          Sites={<Sites />}
        />

      </span>
      <div className="App">

        <br />

      </div>
    </Store>

  );
}

export default App;

//  Possible alternative fake JSON https://reqres.in/.

//import { italic } from 'ansi-colors';
// Advanced table display with builtin filtering 
// https://github.com/gregnb/mui-datatables
// Problem with Material UI Official tables is too much setup code
// https://material-ui.com/demos/tables/
