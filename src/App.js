import React from 'react';

//import React, { useState } from 'react';

import './App.css';
import FischerSections from './components/FischerSections';
import LegalSections from './components/LegalSections';
import Sites from './components/Sites';
import Communities from './components/Communities';
import TabsMaterialUI from './components/Tabs-MaterialUI';

import GlobalState from './context/GlobalState';
import FakeOAuth from './lib/FakeOauth';


/* Where things are 5-17
 1.  Ready for official source repo.
 2.  Tag master branch head.
 3.  Merge add-global-context
  4.  Fake Oauth.  Need real oAuth.

  Pattern idea for Component:  
  1.  Get pageno = context->communitiesPageNo
  2.  Get context->getCommunitiesData(pageno)
  3.  Alternative:  Manage paging in Store, component just calls getCurrentCommunitiesData(), etc
  3.  Global has current pageno, compares and if not equal, sends endpoint req.
  4.  Stores data using dispatch.
  5.  Todo:  Where and how of filtering tbd.


*/
//FakeOAuth();
//console.info (window.sessionStorage.accessToken);

// Experimental oauth handling

//const redirectUrl = "http://localhost:3100/#access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI5Yjk5MGQ4MWM1Y2Y2NGQ3OGFiZWNmYTcwNmYyZjhhNGMzZDI2MzUyYzI3N2RjZTU4ZTM1Y2JiMzc1ZmFmOTlmZDJlMmIwMGJlMzU1MDVlIn0.eyJhdWQiOiI0MyIsImp0aSI6IjI5Yjk5MGQ4MWM1Y2Y2NGQ3OGFiZWNmYTcwNmYyZjhhNGMzZDI2MzUyYzI3N2RjZTU4ZTM1Y2JiMzc1ZmFmOTlmZDJlMmIwMGJlMzU1MDVlIiwiaWF0IjoxNTU4MzgwNTA3LCJuYmYiOjE1NTgzODA1MDcsImV4cCI6MTU1ODM4MDk4Nywic3ViIjoiMjYwMjgiLCJzY29wZXMiOltdLCJ1c2VybmFtZSI6ImRpc29uIiwiZ3VpZCI6IjE4ZmEwNDI4LTA2MTctNGU1Ni04YWE5LWNmYjVmNWI4Y2FmMSIsIm5hbWUiOiJEYXZpZCBJc29uIiwiYXV0aF9kcml2ZXIiOiJsZGFwIn0.LGxaMLMMlTR7_h6NTOX1tc-ihM93fWDiJXTvimSkBOUjIRDQDRAYJkOC8vaEKEUy_4NvmRvCb8ha5qxF5nWjpL_g9Yjp_e9PzTyWGGWm6MKWerT-EzHI0HgxgdA6aJIBvNzG0-5WH0sltTEJYm4EFvhvhJt68_R5EHO_9lh3h44U_xkmowp9Rxpxa1arP5cEUpvl1eCfyw49PwoRGYREqLT08T8e5wju_YEyaVnm8CdlW4DYqzyk8ruch41MhVSF_ZT8A18PD30crzxfuqlJMQMA0_m4SbbfLHZZ7okkHseimyv99r4iTR9JNYazmdW_urpxufrsF9HMRLZuaPDTcC8dFSW06OazCXAtGGQ6JtMBdbliVpkpxlQ91SI2OQlFOzPrTKYOJpDrfclr1QntUAcCaXvEQhq3hEfOL3j7yBFbP3wYG-zTLu7U8TBFO99aqm7V5YHbbF7mKO8SZObh51Tq8AWYwAKxjhC4Ak8K__w-mqUcvyS7bW4Sd_gUkb5pLxHPRhuOucn7H_S0bfCnZhrbuAxTnE5NEOHKwhoj8yokSWwQpdVDRdNjDQOImIdCaPMy3HEwa6d-05g8bIfimmP0_prgxvdKcuhZLAAJ741vWKdiJXxknZiO5QF9QAiW7-5FJJyZjWTDECMqTJEGM2GBqZ1680z2pQfOP9KPCi0&token_type=Bearer&expires_in=480"

const redirectUrl = window.location.href;
console.info ('checking');

if (window.location.href.search ('access_token') !== -1) {
//debugger;

  const url = window.location.href.replace('#', '?');

  var regex = /[?&]([^=#]+)=([^&#]*)/g;
  let  params = {};
  let  match;
  // reduce this..
  while (match = regex.exec(url)) {
      params[match[1]] = match[2];
  }
  
  console.info('On redirect after oauth token retrieval', params);
}






//import { italic } from 'ansi-colors';


// Advanced table display with builtin filtering 
// https://github.com/gregnb/mui-datatables
// Problem with Material UI Official tables is too much setup code
// https://material-ui.com/demos/tables/


function App() {
 // const [showHotJSON, setShowHotJSON] = useState(true);

  return (
    <GlobalState>
    <h3 style={{display: 'inline'}}>  Land Ops Home <span>Clickme</span> </h3>    View Mode  
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

 