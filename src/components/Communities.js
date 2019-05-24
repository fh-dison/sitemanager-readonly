import React, {  useState,  useContext, useEffect } from 'react';
import {SortingState, PagingState, IntegratedPaging, IntegratedSorting} from '@devexpress/dx-react-grid';
import { Grid, Table, PagingPanel, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

import {communitiesRows, communitiesColumns} from 'mockdata/communitiesData';

import AppContext from '../context/app-context';
import Paginator from './Paginator';

import {testSquare, loadEndpointUsingAccessKey, loadEndpointUsingAccessKey2} from '../lib/DataTools';
//import axios from 'axios';

const Communities = (props) => {
  const context = useContext(AppContext);

  // Use lazy loading of data.  On useEffect(), request Store to sync / fetch current page of data
  useEffect(() => {
     context.syncCurrentCommunitiesPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.communitiesPage]);


  // TODO: Move to React Context 
    //const rows = communitiesRows;
    const columns = communitiesColumns;
//debugger;
    // TODO:  Try point-free, use spread op syntax
    const rows = context.communitiesData.data.map(community=>{
      return {
        division: community.division.division,
        community_code: community.code,
        community_name: community.name,
        budget_neighborhood: community.division.division_name,
      };
    });

/* const info = {
  page: context.communitiesData.page,
  data: context.communitiesData.data
};
 */
 
 console.info (`Communities rendering page ${context.communitiesPage} with data `, rows);

const [clickCount, setClickCount] = useState(0);

//console.info ('Communities page is ', context.communitiesPage, context.omniboxFilter);
return (

 <React.Fragment>
       Dev Extreme React Grid <strong>https://devexpress.github.io/devextreme-reactive/react/grid/ </strong>
      <span onClick={()=>{console.info(context.communitiesData); debugger;}}>Debug</span> 
  <Grid
    columns={columns}
    rows={rows}
    >
    <SortingState
      defaultSorting={[{ columnName: 'community_code', direction: 'asc' }]}
    />
    <PagingState />

    <IntegratedSorting />  
    <IntegratedPaging />

    <Table />
    <TableHeaderRow showSortingControls />
    {/* <PagingPanel pageSizes={20} /> */}

  </Grid>
  <br/>
    Total {rows.length}
    <br/>
    Filter {context.omniboxFilter}
    <br/>
    Page {context.communitiesPage}
    <br/>
    <Paginator context={context}/>
    <br/>
    <span onClick={e=>{console.info('access token', context.accessToken)}}>Debug</span>
    
    
    <span onClick={e=>{

//testSquare(clickCount);
console.clear();
loadEndpointUsingAccessKey('/api/v3/communities?per_page=10&includes=division&page=1', context.accessToken).then(response => {
  context.setAccessToken(response.accessToken); 
  console.info('Data is ', response.data);

});



setClickCount(clickCount + 1);


/*       const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');
      params.append('client_id', '43');
      params.append('client_secret', '8g66LF6bQMQWNBl0F9ZCUCyxVz1VsfQtUPyIhgeJ');

   
        axios.post('https://auth-staging.fischermgmt.com/oauth/token', params)

//    axios({
//     method: "post",
//     url: "https://auth-staging.fischermgmt.com/oauth/token",
//     data: params,
//  //   transformResponse: [dataParser, dataFormatter],
//   })



      .then (response => {
        debugger;
      })
      .catch(error => {
        
        console.log(error);
        debugger;
      });
 */



    }}>/test</span>
  </React.Fragment>
)};

//eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBlYmQ4YjA2ZTYzYTY3ZjQ5YmNhN2JmYWYzYjAzMDExYTAyOTA0NGQ1Mzg0MWFkYzRiOTAxYmQ4MDEwZjAxZWVkMGNhOWQ1ZmYzMzY2YjdjIn0.eyJhdWQiOiI0MyIsImp0aSI6IjBlYmQ4YjA2ZTYzYTY3ZjQ5YmNhN2JmYWYzYjAzMDExYTAyOTA0NGQ1Mzg0MWFkYzRiOTAxYmQ4MDEwZjAxZWVkMGNhOWQ1ZmYzMzY2YjdjIiwiaWF0IjoxNTU4NTI4NDA4LCJuYmYiOjE1NTg1Mjg0MDgsImV4cCI6MTU1ODUyODg4OCwic3ViIjoiMjYwMjgiLCJzY29wZXMiOltdLCJ1c2VybmFtZSI6ImRpc29uIiwiZ3VpZCI6IjE4ZmEwNDI4LTA2MTctNGU1Ni04YWE5LWNmYjVmNWI4Y2FmMSIsIm5hbWUiOiJEYXZpZCBJc29uIiwiYXV0aF9kcml2ZXIiOiJsZGFwIn0.SYZz-hrApMuln88G2J09MGAo5wz4y2yYjVEUMjI1PEmEalXspnThO3Un2nod4lQXG24UqHM0c3wMDLnooYdGymivWKiWi6v7voimnundkkfOFg0cDsm4tHinIKAMD0C6d6jVwji08dBMVqAyxRUwUCUI2bvhPqIj314I-Pvey4whC_QyiAUQ-rw7Ny0xVDUoM92h5wGaxVPLbkhMlKpb-pSayt8dU7FOE8n0kjD0kVdNpeILCbEm9hVBUsnmSpn2uOkx_3OxYeSHOEGkrWY40yxJDSklsgqUPmUTrbLZl6eGRJ6za7fCA2rL1v3DR2DzZfKOXgBXUy8iiMh1LnduMzEy_eBosXxoinUxifjsIxTPfBT-FE3XWOkkO_84i4N9Ks6bEUV8C6FhoDt7y8S-QsDP2lK3zgUdZzh3X2mSRHDl-dZE7q6vDkMdod5377vjmJcztgCYtGBZ0ENBJ2PtUzXk-8ccqfO1vZ_-AlBzwkexP9-cR_ps6myPz14lju_yxjD6HUGv_Zxj16ES7E4_I70EXt7sK6IG1vI0I5y4HUp2NeMUIpECPoeS1477QdZhAM0PQWk1Kstncl48h7beX9HgUBHZYw3ZW5Qu9_GPj5MUr3UvytMeguuIrhHIGhC4UkFm_DW6LNOMCGFSA0ikrDi1vT4yAudIUEAL7_y2KjA





export default Communities;



//  console.info ("Communities (re)-rendering, filter is ", context.omniboxFilter);
//  const [data, setData] = useState([]);