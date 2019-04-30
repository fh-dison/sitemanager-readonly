import React, { useState, useEffect } from 'react';
import { HotTable } from '@handsontable/react';
import axios from 'axios';

// React 16.8 Functional component with hooks

function HotJSON() {

  // json could be any kind of data from the server
  const [json, setJSON] = useState({});

  useEffect(() => {

    const payload = {
      token: "yJK-1kzbodLxjGQD_8rDMQ",
      data: {
        name: "nameFirst",
        email: "internetEmail",
        phone: "phoneHome",
        _repeat: 300
      }
    };

    axios({
      method: "post",
      url: "https://app.fakejson.com/q",
      data: payload
    }).then(function(resp) {
      console.log (resp);
      // Do something with fake data
      const titles = ['Email', 'Name', 'Phone'];
      const values = resp.data.map(v => {
        return [v.email, v.name, v.phone];
      });

      setJSON([titles, ...values]);

    });

    console.log ("URL fetch here..")
  }, []);


  return (
    <React.Fragment>
      HotJSON
      <HotTable data={json} colHeaders={true} rowHeaders={true} width="600" height="300" licenseKey={'non-commercial-and-evaluation'}/>
    </React.Fragment>

  );
}

export default HotJSON;


/*
    ['', 'Tesla', 'Mercedes', 'Toyota', 'Volvo'],
      ['2019', 10, 11, 12, 13],
      ['2020', 20, 11, 14, 13],
      ['2021', 30, 15, 12, 13]

 */