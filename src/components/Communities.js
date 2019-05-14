import React, { useState } from 'react';
import {SortingState, IntegratedSorting} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';


const Communities = () => {
    // TODO: Move to react Context 
    const rows =    
    [
        {
          "division": 2,
          "community_code": "DAT",
          "community_name": "AMTAP",
          "budget_neighborhood": "Sunt laboris reprehenderit qui adipisicing dolor dolore reprehenderit velit elit amet nostrud sit id."
        },
        {
          "division": 16,
          "community_code": "PHU",
          "community_name": "ELECTONIC",
          "budget_neighborhood": "Anim id aliqua in sunt non do sit ea culpa."
        },
        {
          "division": 77,
          "community_code": "GEE",
          "community_name": "SUREPLEX",
          "budget_neighborhood": "Ullamco eiusmod amet veniam culpa et eu."
        },
        {
          "division": 16,
          "community_code": "ORB",
          "community_name": "ACIUM",
          "budget_neighborhood": "Irure ea consectetur aute ipsum et reprehenderit reprehenderit ipsum do sunt consectetur ex."
        },
        {
          "division": 58,
          "community_code": "ZEN",
          "community_name": "CAPSCREEN",
          "budget_neighborhood": "Officia Lorem et sint et dolore esse non ex qui irure anim cupidatat."
        },
        {
          "division": 95,
          "community_code": "ECR",
          "community_name": "DANCERITY",
          "budget_neighborhood": "Ea reprehenderit amet consectetur ullamco."
        },
        {
          "division": 47,
          "community_code": "EBI",
          "community_name": "GEEKULAR",
          "budget_neighborhood": "Anim labore laboris do consequat officia non Lorem."
        },
        {
          "division": 12,
          "community_code": "KIN",
          "community_name": "VELITY",
          "budget_neighborhood": "Eu aliqua quis sunt ullamco ipsum aliqua id commodo enim proident."
        },
        {
          "division": 25,
          "community_code": "EAR",
          "community_name": "NORALEX",
          "budget_neighborhood": "Dolore nulla incididunt pariatur eiusmod officia consectetur quis quis aliqua cillum culpa dolore id mollit."
        },
        {
          "division": 77,
          "community_code": "SPR",
          "community_name": "PROTODYNE",
          "budget_neighborhood": "Deserunt qui elit sint occaecat qui eu aliquip minim adipisicing."
        },
        {
          "division": 73,
          "community_code": "SEA",
          "community_name": "VOLAX",
          "budget_neighborhood": "Laborum nulla culpa mollit est sint aliqua enim ut pariatur sint officia."
        },
        {
          "division": 43,
          "community_code": "ZOA",
          "community_name": "EMERGENT",
          "budget_neighborhood": "Eu eiusmod adipisicing officia elit ad et."
        },
        {
          "division": 29,
          "community_code": "EMT",
          "community_name": "HOUSEDOWN",
          "budget_neighborhood": "Excepteur ut amet qui quis dolor qui ullamco occaecat pariatur eu ea ipsum officia."
        },
        {
          "division": 90,
          "community_code": "ZOI",
          "community_name": "FRENEX",
          "budget_neighborhood": "Lorem dolor incididunt nostrud duis velit et aliqua proident aliquip excepteur aliqua."
        },
        {
          "division": 60,
          "community_code": "VER",
          "community_name": "EMOLTRA",
          "budget_neighborhood": "Cillum laboris aliquip duis sint officia enim ea culpa id."
        },
        {
          "division": 48,
          "community_code": "DIG",
          "community_name": "ZENTIME",
          "budget_neighborhood": "Velit laboris aute fugiat adipisicing velit do laborum laboris consectetur."
        },
        {
          "division": 5,
          "community_code": "SOL",
          "community_name": "ORONOKO",
          "budget_neighborhood": "Adipisicing aliquip sint eiusmod tempor."
        },
        {
          "division": 53,
          "community_code": "VIN",
          "community_name": "ENERVATE",
          "budget_neighborhood": "In laboris excepteur ipsum ipsum veniam fugiat."
        },
        {
          "division": 44,
          "community_code": "NAV",
          "community_name": "MITROC",
          "budget_neighborhood": "Voluptate ex consectetur sit laborum eiusmod sint fugiat."
        },
        {
          "division": 17,
          "community_code": "OVO",
          "community_name": "ARTIQ",
          "budget_neighborhood": "Esse exercitation ipsum sunt officia commodo minim nulla."
        },
        {
          "division": 37,
          "community_code": "ORB",
          "community_name": "INSURON",
          "budget_neighborhood": "Incididunt adipisicing ut pariatur sint quis ullamco aliqua."
        },
        {
          "division": 69,
          "community_code": "SON",
          "community_name": "JASPER",
          "budget_neighborhood": "Aliqua culpa dolore et occaecat Lorem in labore esse nisi in excepteur ullamco excepteur dolore."
        },
        {
          "division": 0,
          "community_code": "BUL",
          "community_name": "ZAPHIRE",
          "budget_neighborhood": "Laborum elit laborum nisi consequat reprehenderit aliquip."
        },
        {
          "division": 36,
          "community_code": "IDE",
          "community_name": "VETRON",
          "budget_neighborhood": "Non reprehenderit nulla Lorem dolore officia sint mollit in laboris."
        },
        {
          "division": 11,
          "community_code": "TRA",
          "community_name": "LUMBREX",
          "budget_neighborhood": "Cupidatat irure proident ullamco exercitation ad tempor consequat cillum."
        },
        {
          "division": 32,
          "community_code": "EVI",
          "community_name": "SQUISH",
          "budget_neighborhood": "Occaecat sint laborum nisi incididunt sunt nisi."
        },
        {
          "division": 49,
          "community_code": "PHO",
          "community_name": "QUILTIGEN",
          "budget_neighborhood": "Laboris Lorem dolor qui ad et veniam cillum pariatur consequat Lorem tempor."
        },
        {
          "division": 12,
          "community_code": "SCE",
          "community_name": "ONTAGENE",
          "budget_neighborhood": "Do aliquip Lorem elit sint et occaecat elit esse eiusmod."
        },
        {
          "division": 93,
          "community_code": "EPL",
          "community_name": "ZENTIX",
          "budget_neighborhood": "Minim sunt excepteur enim Lorem adipisicing mollit occaecat consectetur enim cupidatat."
        },
        {
          "division": 25,
          "community_code": "ZYT",
          "community_name": "VIASIA",
          "budget_neighborhood": "Laboris consequat consequat ut proident id cillum tempor dolor ea qui laborum enim."
        },
        {
          "division": 24,
          "community_code": "CRU",
          "community_name": "INTRAWEAR",
          "budget_neighborhood": "Proident eiusmod voluptate tempor ea ut eiusmod ut fugiat."
        },
        {
          "division": 8,
          "community_code": "MAG",
          "community_name": "MARVANE",
          "budget_neighborhood": "Occaecat dolore tempor velit non."
        },
        {
          "division": 42,
          "community_code": "HIN",
          "community_name": "QUONK",
          "budget_neighborhood": "Consequat Lorem mollit sit magna qui est excepteur consequat ea nostrud nulla eiusmod."
        },
        {
          "division": 70,
          "community_code": "BOI",
          "community_name": "GEEKOL",
          "budget_neighborhood": "Ullamco tempor reprehenderit aliquip do culpa et velit proident quis veniam."
        },
        {
          "division": 8,
          "community_code": "ZOG",
          "community_name": "QUADEEBO",
          "budget_neighborhood": "Ea dolor eiusmod nostrud amet nulla ex et consequat."
        },
        {
          "division": 28,
          "community_code": "COM",
          "community_name": "AQUASURE",
          "budget_neighborhood": "Irure consequat ad ex ex ipsum culpa non dolore consectetur aliqua."
        },
        {
          "division": 92,
          "community_code": "CHI",
          "community_name": "IRACK",
          "budget_neighborhood": "Dolore sit proident dolore labore adipisicing cupidatat quis laborum consectetur duis elit eu."
        },
        {
          "division": 52,
          "community_code": "FIT",
          "community_name": "KIOSK",
          "budget_neighborhood": "Voluptate laboris eu deserunt do aliqua culpa nulla dolor in ea duis enim."
        },
        {
          "division": 86,
          "community_code": "ZIA",
          "community_name": "CYCLONICA",
          "budget_neighborhood": "Lorem proident pariatur dolore ea."
        },
        {
          "division": 90,
          "community_code": "EQU",
          "community_name": "SNOWPOKE",
          "budget_neighborhood": "Aute eiusmod veniam mollit pariatur velit."
        },
        {
          "division": 3,
          "community_code": "BUL",
          "community_name": "OMNIGOG",
          "budget_neighborhood": "Deserunt non non minim culpa cupidatat ea."
        },
        {
          "division": 52,
          "community_code": "MIR",
          "community_name": "NIPAZ",
          "budget_neighborhood": "Dolor ipsum labore tempor Lorem sit irure ipsum proident."
        },
        {
          "division": 98,
          "community_code": "BOL",
          "community_name": "SARASONIC",
          "budget_neighborhood": "Exercitation ullamco incididunt aliquip est id amet laboris nisi incididunt duis."
        },
        {
          "division": 86,
          "community_code": "OPP",
          "community_name": "ZOLAR",
          "budget_neighborhood": "Excepteur quis aliquip mollit et magna tempor veniam labore esse ea laborum fugiat."
        },
        {
          "division": 24,
          "community_code": "RON",
          "community_name": "TELEPARK",
          "budget_neighborhood": "Duis veniam enim consequat ad labore do aliquip cillum duis."
        },
        {
          "division": 16,
          "community_code": "ZEN",
          "community_name": "ENTROFLEX",
          "budget_neighborhood": "Sint in veniam nostrud fugiat velit occaecat consequat fugiat elit."
        },
        {
          "division": 77,
          "community_code": "ORB",
          "community_name": "BUNGA",
          "budget_neighborhood": "Cupidatat proident magna ea commodo proident et fugiat proident amet eiusmod ipsum."
        },
        {
          "division": 10,
          "community_code": "GEO",
          "community_name": "PARLEYNET",
          "budget_neighborhood": "Amet consequat cillum dolore tempor mollit tempor ex occaecat amet tempor fugiat quis in."
        },
        {
          "division": 20,
          "community_code": "ISO",
          "community_name": "STELAECOR",
          "budget_neighborhood": "Voluptate qui consectetur amet esse."
        },
        {
          "division": 40,
          "community_code": "DAT",
          "community_name": "LOVEPAD",
          "budget_neighborhood": "Est consectetur aliqua sunt qui minim aliquip et non exercitation occaecat ullamco in."
        }
      ]


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
  <br/>
    Total {rows.length}
  </React.Fragment>
)};

export default Communities;