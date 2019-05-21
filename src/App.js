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
//import {EnsureAuthenticated} from './lib/OAuth';
import Authenticator from './lib/OAuth';


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



// const token = GetAccessTokenFromAppUrl();

// if (token.length === 0) {
//   window.location.href = 'https://auth-staging.fischermgmt.com/oauth/authorize?client_id=43&response_type=token';
// }

//EnsureAuthenticated();

const request = {
  // `url` is the server URL that will be used for the request
  url: '/user',

  // `method` is the request method to be used when making the request
  method: 'get', // default

  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [function (data) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `headers` are custom headers to be sent
  //  headers: {'X-Requested-With': 'XMLHttpRequest'},


  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 0, // default
}


function App() {
  // const [showHotJSON, setShowHotJSON] = useState(true);

  return (
    <GlobalState>
      <Authenticator></Authenticator>
      <h3 style={{ display: 'inline' }}>  Land Ops Home  </h3>    View Mode  <span >Clickme</span>
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
