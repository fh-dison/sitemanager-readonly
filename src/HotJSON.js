import React, { useState, useEffect } from 'react';
import { HotTable } from '@handsontable/react';
import axios from 'axios';

// React 16.8 Functional component with hooks
function HotJSON() {

  // json could be any kind of data from the server
  const [json, setJSON] = useState({});

  // Prototype data handler for server input data
  //  Can use nested try/catch etc for advanced error handling
  //  Ex:  API data can't be parsed properly
  const dataParser = (data, headers) => {
    try {
      return JSON.parse(data);

    } catch (e) {
      // SyntaxError, Mapping error, some other error
     if (e instanceof SyntaxError) {
       // Was a JSON.parse error
     }
    }
  }


  const dataFormatter = (data) => {
    try {
      const values = data.map(v => {
        return [v.email, v.name, v.phone];
      });
      return [['Email', 'Name', 'Phone'], ...values];
    } catch (e) {
      //  Mapping error, some other error
    }

  }


  useEffect(() => {

    const instructions = {
  //    token: "yJK-1kzbodLxjGQD_8rDMQ",
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
      data: instructions,
      transformResponse: [dataParser, dataFormatter],


    }).then(function(resp) {
      console.log ("onfulfilled", resp);
      setJSON(resp.data);
    });

  }, []);


  return (
    <React.Fragment>
      HotJSON with server data
      <HotTable data={json} colHeaders={true} rowHeaders={true} width="600" height="300" licenseKey={'non-commercial-and-evaluation'}/>
    </React.Fragment>

  );
}

export default HotJSON;


// Useful Errors stuff

/*    try {
      eval('hoo bar');
    } catch (e) {
      console.log(e instanceof SyntaxError); // true
      console.log(e.message);                // "missing ; before statement"
      console.log(e.name);                   // "SyntaxError"
      console.log(e.fileName);               // "Scratchpad/1"
      console.log(e.lineNumber);             // 1
      console.log(e.columnNumber);           // 4
      console.log(e.stack);                  // "@Scratchpad/1:2:3\n"
    }*/