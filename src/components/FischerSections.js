import React, {  /* useState, */  useContext, useEffect } from 'react';
import MaterialTable from "material-table";
import {fischerSectionsColumns} from 'mockdata/fischerSectionsData';
import AppContext from '../context/app-context';
import Pagination from "material-ui-flat-pagination";

const FischerSections = (props) => {
  const context = useContext(AppContext);

    useEffect(() => {
    context.syncCurrentFischerSectionsPage();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [context.fischerSectionsPage, context.omniboxFilter]);
  

  // TODO:  This should probably go in datatools as a transformResponse for back end.   ?
  const rows = context.fischerSectionsData.data
  const columns = fischerSectionsColumns;
  
  console.info('Fischer Sections rendering..');
 
  return (
  <>
  <div style={{ maxWidth: "50%" }}>
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
