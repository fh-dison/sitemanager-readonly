import React, { useState, useEffect } from 'react';
import { HotTable } from '@handsontable/react';
import axios from 'axios';

// React 16.8 Functional component with hooks
function HotJSON() {

  // json could be any kind of data from the server
  const [json, setJSON] = useState({});

  useEffect(() => {

    const instructions = {
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
      data: instructions,

    }).then(function(resp) {
      // Change individual objects into arrays for handsontable
      const values = resp.data.map(v => {
        return [v.email, v.name, v.phone];
      });
      setJSON([['Email', 'Name', 'Phone'], ...values]);

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