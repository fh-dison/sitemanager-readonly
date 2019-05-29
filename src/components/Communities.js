import React, {  /* useState, */  useContext, useEffect } from 'react';
// import {SortingState, /* PagingState,  IntegratedPaging, */ IntegratedSorting} from '@devexpress/dx-react-grid';
// import { Grid, Table, /* PagingPanel, */ TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import MaterialTable from "material-table";

import {communitiesColumns} from 'mockdata/communitiesData';
import AppContext from '../context/app-context';
import Pagination from "material-ui-flat-pagination";
import { endpointActionUsingAccessToken} from '../lib/DataTools';

const Communities = (props) => {
  const context = useContext(AppContext);

  useEffect(() => {
     context.syncCurrentCommunitiesPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.communitiesPage, context.omniboxFilter]);

  // TODO:  This should probably go in datatools as a transformResponse for back end.   ?
  const rows = context.communitiesData.data;
  const columns = communitiesColumns;
  console.info('Communities rendering..');

  return (
  <>

  <div style={{ maxWidth: "100%" }}>
  <MaterialTable
    columns={ columns  }
    data={rows}
    options={{
      paging: false,
      search: false,
      showTitle: false,
      toolbar: false,
    }}
  />
  </div>



  <br/>
    Total {rows.length}
    <br/>
    Filter {context.omniboxFilter.length === 0 ? 'none ' : context.omniboxFilter}
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

     {/* Just debugging */}
    <span onClick={e=>{console.info('access_token in Global Context', context.accessToken)}}>Debug</span>
    <span onClick={e=>{
      console.clear();
      endpointActionUsingAccessToken('/api/v3/communities?per_page=10&includes=division&page=1', context.accessToken).then(response => {
      context.setAccessToken(response.accessToken); 
      console.info('Data is ', response.data);
    });
    }}>/test</span>
  </>
)};

export default Communities;


//  const [clickCount, setClickCount] = useState(0);
//setClickCount(clickCount + 1);
//console.info (`Communities rendering page ${context.communitiesPage} with data `, rows);
//Dev Extreme React Grid <strong>https://devexpress.github.io/devextreme-reactive/react/grid/ </strong>
//<span onClick={()=>{console.info(context.communitiesData); debugger;}}>Debug</span> 