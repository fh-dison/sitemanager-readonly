import React, { useState } from 'react';


import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
// import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
// import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap3';

const Communities = () => (
    <React.Fragment>
       Dev Extreme React Grid <strong>https://devexpress.github.io/devextreme-reactive/react/grid/ </strong>
  <Grid
    rows={[
      { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
      { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
    ]}
    columns={[
      { name: 'id', title: 'ID' },
      { name: 'product', title: 'Product' },
      { name: 'owner', title: 'Owner' },
    ]}>
    <Table />
    <TableHeaderRow />
  </Grid>
  </React.Fragment>
);

export default Communities;