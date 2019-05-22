import React from 'react';

import './App.css';

import Authenticator from './components/Authenticator';
import FischerSections from './components/FischerSections';
import LegalSections from './components/LegalSections';
import Sites from './components/Sites';
import Communities from './components/Communities';
import TabsMaterialUI from './components/Tabs-MaterialUI';
import GlobalState from './context/GlobalState';
//import Idle from 'react-user-idle';

/* Where things are 5-17
 1.  Ready for official source repo.
 2.  Tag master branch head.
 3.  Merge add-global-context
  4.  Fake Oauth.  Need real oAuth.

  Pattern idea for Component:  
  
  3.  Alternative:  Manage paging in Store, component just calls a. context.syncCurrentCommunitiesPage()  b. uses context.communitiesData

  5.  Todo:  Where and how of filtering tbd.
*/

// setInterval (()=>{
//   console.info ("Faking renewal of access token");
// }, 15 * 1000);


function App() {

  return (
    <GlobalState>
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
    </GlobalState>

  );
}

export default App;

//  Possible alternative fake JSON https://reqres.in/.

//import { italic } from 'ansi-colors';
// Advanced table display with builtin filtering 
// https://github.com/gregnb/mui-datatables
// Problem with Material UI Official tables is too much setup code
// https://material-ui.com/demos/tables/
