import React, { /*useState, */ useContext, useEffect } from 'react';
import {SortingState, PagingState, IntegratedPaging, IntegratedSorting} from '@devexpress/dx-react-grid';
import { Grid, Table, PagingPanel, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

import {communitiesRows, communitiesColumns} from 'mockdata/communitiesData';

import AppContext from '../context/app-context';
import Paginator from './Paginator';


const Communities = (props) => {
  const context = useContext(AppContext);

  // Use lazy loading of data.  On useEffect(), request Store to sync / fetch current page of data
  useEffect(() => {
     context.syncCurrentCommunitiesPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.communitiesPage]);


  // TODO: Move to React Context 
    const rows = communitiesRows;
    const columns = communitiesColumns;

const info = {
  page: context.communitiesData.page,
  data: context.communitiesData.data
};
console.info ('Communities rendering with ', info, 'Access Token is', context.accessToken.substring(0, 50) + '...');

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
    <PagingPanel pageSizes={20} />

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
    <span onClick={e=>{console.info('access token', context.accessToken)}}>Debug/test</span>
  </React.Fragment>
)};

export default Communities;



//  console.info ("Communities (re)-rendering, filter is ", context.omniboxFilter);
//  const [data, setData] = useState([]);