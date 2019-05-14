import React, { useState } from 'react';
import {SortingState, IntegratedSorting} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';


const Communities = () => {
    // TODO: Move to react Context 
    const rows =    [
        {
        "division": 62,
        "community_code": "QIA",
        "community_name": "CYTREX",
        "budget_neighborhood": "Pariatur enim sit sunt in minim nulla enim ea irure."
        },
        {
        "division": 14,
        "community_code": "HOP",
        "community_name": "OVERPLEX",
        "budget_neighborhood": "Laborum deserunt minim incididunt reprehenderit velit laboris eiusmod tempor enim deserunt ex."
        },
        {
        "division": 27,
        "community_code": "BIT",
        "community_name": "COMVEYOR",
        "budget_neighborhood": "Velit sunt incididunt sunt fugiat reprehenderit laboris quis anim qui commodo anim velit deserunt excepteur."
        },
        {
        "division": 15,
        "community_code": "COM",
        "community_name": "ZEAM",
        "budget_neighborhood": "Est non consequat laboris est."
        },
        {
        "division": 70,
        "community_code": "VAN",
        "community_name": "ONTALITY",
        "budget_neighborhood": "Est ullamco ut culpa nulla duis culpa esse eiusmod veniam laborum."
        },
        {
        "division": 6,
        "community_code": "TOU",
        "community_name": "EGYPTO",
        "budget_neighborhood": "Sunt occaecat adipisicing irure aliqua."
        }
    ];

    const columns = [
        { name: 'division', title: 'Division' },
        { name: 'community_code', title: 'Community Code' },
        { name: 'community_name', title: 'Community Name' },
        { name: 'budget_neighborhood', title: 'Budget Neighborhood' },
      ];
return (




    <React.Fragment>
       Dev Extreme React Grid <strong>https://devexpress.github.io/devextreme-reactive/react/grid/ </strong>
  <Grid
    columns={columns}
    rows={rows}
    >
    <SortingState
            defaultSorting={[{ columnName: 'city', direction: 'asc' }]}
          />
          <IntegratedSorting />  
    <Table />
    <TableHeaderRow showSortingControls />
  </Grid>

  </React.Fragment>
)};

export default Communities;