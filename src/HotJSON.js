import React, { useState, useEffect } from 'react';
import { HotTable } from '@handsontable/react';
import axios from 'axios';
import {dataParser, dataFormatter} from 'DataTools';

// React 16.8 Functional component with hooks
function HotJSON() {

  // json could be any kind of data from the server
  const [json, setJSON] = useState({});


  useEffect(() => {

    const requestDetails = {

      //token: "yJK-1kzbodLxjGQD_8rDMQ",
      token: "7yDxKTCDoT4hTiB9-27c8w",

      data: {
        name: "nameFirst",
        email: "internetEmail",
        phone: "phoneHome",
        _repeat: 3
      }
    };

    axios({
      method: "post",
      url: "https://app.fakejson.com/q",
      data: requestDetails,
      transformResponse: [dataParser, dataFormatter],
    }).then(function(resp) {
      console.log ("onfulfilled", resp);
      setJSON(resp.data);
    });

    return (params) => {
      console.log ("Doing component cleanup, unsubscribing, remove event listeners, etc.")
    }

  }, []);


  return (
    <React.Fragment>
      HotJSON with server data --
      <HotTable data={json} colHeaders={true} rowHeaders={true} width="600" height="300" licenseKey={'non-commercial-and-evaluation'}/>
    </React.Fragment>

  );
}

export default HotJSON;