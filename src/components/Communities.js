import React, {  useState,  useContext, useEffect } from 'react';
import {SortingState, PagingState, IntegratedPaging, IntegratedSorting} from '@devexpress/dx-react-grid';
import { Grid, Table, /* PagingPanel, */ TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

import {communitiesColumns} from 'mockdata/communitiesData';

import AppContext from '../context/app-context';
import Paginator from './Paginator';

import {/* testSquare, */ loadEndpointUsingAccessKey} from '../lib/DataTools';
//import axios from 'axios';

const Communities = (props) => {
  const context = useContext(AppContext);

  // Use lazy loading of data.  On useEffect(), request Store to sync / fetch current page of data
  useEffect(() => {
     context.syncCurrentCommunitiesPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.communitiesPage]);

    //  TODO: What is best way to do this?
    const columns = communitiesColumns;

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




    }}>/test</span>
  </React.Fragment>
)};





export default Communities;



