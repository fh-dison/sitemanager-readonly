import React, {  useState,  useContext, useEffect } from 'react';
import {SortingState, PagingState, IntegratedPaging, IntegratedSorting} from '@devexpress/dx-react-grid';
import { Grid, Table, /* PagingPanel, */ TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import {communitiesColumns} from 'mockdata/communitiesData';
import AppContext from '../context/app-context';
import Pagination from "material-ui-flat-pagination";
import { loadEndpointUsingAccessToken} from '../lib/DataTools';

const Communities = (props) => {
  const context = useContext(AppContext);

  // Use lazy loading of data.  On useEffect(), request Store to sync / fetch current page of data
  useEffect(() => {
     context.syncCurrentCommunitiesPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.communitiesPage]);

    //  TODO: What is best way to do this?
  const columns = communitiesColumns;

  // TODO:  This should probably go in datatools as a transformResponse for back end.  Pass into loadEndpointUsingAccessToken() ?
  const rows = context.communitiesData.data;

  //console.info (`Communities rendering page ${context.communitiesPage} with data `, rows);

  const [clickCount, setClickCount] = useState(0);

return (
 <>
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
    <Pagination
          limit={10}
          offset={(context.communitiesPage - 1) * 10}
          total={context.communitiesData.total}
          onClick={(e, offset) => {
            context.setCommunitiesPage((offset / 10) + 1)
          }
          }
        /> 
    <br/>
    <span onClick={e=>{console.info('access_token in Global Context', context.accessToken)}}>Debug</span>
    
    
    <span onClick={e=>{
// Just debugging
console.clear();
loadEndpointUsingAccessToken('/api/v3/communities?per_page=10&includes=division&page=1', context.accessToken).then(response => {
  context.setAccessToken(response.accessToken); 
  console.info('Data is ', response.data);

});



setClickCount(clickCount + 1);




    }}>/test</span>
  </>
)};





export default Communities;



