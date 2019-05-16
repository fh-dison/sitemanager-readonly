import React, { useState, useContext, useEffect } from 'react';
import {SortingState, PagingState, IntegratedPaging, IntegratedSorting} from '@devexpress/dx-react-grid';
import { Grid, Table, PagingPanel, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

import {communitiesRows, communitiesColumns} from 'mockdata/communitiesData';

import AppContext from '../context/app-context';


const Communities = () => {
  const context = useContext(AppContext);
console.info ("Communities rendering, context is ", context);

  // TODO: Move to React Context 
    const rows = communitiesRows;
    const columns = communitiesColumns;



return (

 <React.Fragment>
       Dev Extreme React Grid <strong>https://devexpress.github.io/devextreme-reactive/react/grid/ </strong>
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
  </React.Fragment>
)};

export default Communities;
