import React, { /* useState, */  useContext, /* useEffect */ } from 'react';
import {SortingState, PagingState, IntegratedPaging, IntegratedSorting} from '@devexpress/dx-react-grid';
import { Grid, Table, PagingPanel, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import {legalSectionsRows, legalSectionsColumns} from 'mockdata/legalSectionsData';
import AppContext from '../context/app-context';

const LegalSections = () => {
  const context = useContext(AppContext);

  // TODO: Move to React Context 
  const rows = legalSectionsRows;
  const columns = legalSectionsColumns;

  console.info ("Legal Sections (re)-rendering, filter is ", context.omniboxFilter);

return (

 <React.Fragment>
       Dev Extreme React Grid <strong>https://devexpress.github.io/devextreme-reactive/react/grid/ </strong>
  <Grid
    columns={columns}
    rows={rows}
    >
    <SortingState
        defaultSorting={[{ columnName: 'legal_section_code', direction: 'asc' }]}
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
  </React.Fragment>
)};

export default LegalSections;
