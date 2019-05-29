import React, {  /* useState, */  useContext, useEffect } from 'react';
// import ReactDataGrid from 'react-data-grid';
import {SortingState, /* PagingState,  IntegratedPaging, */ IntegratedSorting} from '@devexpress/dx-react-grid';
import { Grid, Table, /* PagingPanel, */ TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import {fischerSectionsRows,fischerSectionsColumns} from 'mockdata/fischerSectionsData';
import AppContext from '../context/app-context';
import Pagination from "material-ui-flat-pagination";

const FischerSections = (props) => {
  const context = useContext(AppContext);

/*   useEffect(() => {
    context.syncCurrentCommunitiesPage();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [context.communitiesPage, context.omniboxFilter]);
 */

  // TODO:  This should probably go in datatools as a transformResponse for back end.   ?
  //const columns = communitiesColumns;
  //const rows = context.communitiesData.data;

  const rows = fischerSectionsRows;
  const columns = fischerSectionsColumns;
  
  console.info('Fischer Sections rendering..');

 
  return (
    <>
    <Grid
    columns={columns}
    rows={rows}
    >
    <SortingState
      defaultSorting={[{ columnName: 'community_code', direction: 'asc' }]}
    />
    <IntegratedSorting />  
    <Table />
    <TableHeaderRow showSortingControls />
  </Grid>
  <br/>
    Total {rows.length}
    <br/>
    Filter {context.omniboxFilter.length === 0 ? 'none ' : context.omniboxFilter}
    <br/>
    Page {context.communitiesPage}
    <br/>
    {/* <Pagination
          limit={10}
          offset={(context.communitiesPage - 1) * 10}
          total={context.communitiesData.total}
          onClick={(e, offset) => {
            context.setCommunitiesPage((offset / 10) + 1)
          }
          }
        />  */}
    
    </>    
  )
 
}
export default FischerSections;

//console.info ("Fischer Sections (re)-rendering, filter is ", context.omniboxFilter);
