import React, {  /* useState, */  useContext, useEffect } from 'react';
import ReactDataGrid from 'react-data-grid';
import {SortingState, /* PagingState,  IntegratedPaging, */ IntegratedSorting} from '@devexpress/dx-react-grid';
import { Grid, Table, /* PagingPanel, */ TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import {fischerSectionsRows, fischerSectionsColumns} from 'mockdata/fischerSectionsData';
import AppContext from '../context/app-context';
import Pagination from "material-ui-flat-pagination";

const FischerSections = (props) => {
  const context = useContext(AppContext);

    useEffect(() => {
    context.syncCurrentFischerSectionsPage();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [context.fischerSectionsPage, context.omniboxFilter]);
  

  // TODO:  This should probably go in datatools as a transformResponse for back end.   ?
  //const rows = fischerSectionsRows;
  const rows = context.fischerSectionsData.data
  const columns = fischerSectionsColumns;
  //const rows = context.fischerSectionsData.data;
  
  console.info('Fischer Sections rendering..', rows);
//debugger;
 
  return (
    <>

<ReactDataGrid
    columns={columns}
    rowGetter={i => rows[i]}
    rowsCount={rows.length}
    minHeight={500} 
/>



  <br/>
    Total {rows.length}
    <br/>
    Filter {context.omniboxFilter.length === 0 ? 'none ' : context.omniboxFilter}
    <br/>
    Page {context.fischerSectionsPage}
    <br/>
     <Pagination
          limit={10}
          offset={(context.fischerSectionsPage - 1) * 10}
          total={context.fischerSectionsData.total}
          onClick={(e, offset) => {
            context.setFischerSectionsPage((offset / 10) + 1)
          }
          }
        />   
    
    </>    
  )
 
}
export default FischerSections;

//console.info ("Fischer Sections (re)-rendering, filter is ", context.omniboxFilter);
