import React, { useState, useContext, useEffect } from 'react';
import ReactDataGrid from 'react-data-grid';
import {fischerSectionsRows,fischerSectionsColumns} from 'mockdata/fischerSectionsData';
import AppContext from '../context/app-context';

const FischerSections = (props) => {
  const context = useContext(AppContext);

  const rows = fischerSectionsRows;
  const columns = fischerSectionsColumns;
  
  console.info ("Fischer Sections (re)-rendering, filter is ", context.omniboxFilter);
 
  return (
    <>
          React Data Grid <strong>https://adazzle.github.io/react-data-grid/</strong>

    <ReactDataGrid
    columns={columns}
    rowGetter={i => rows[i]}
    rowsCount={rows.length}
    minHeight={500} 
    />
        Total {rows.length}

    </>    
  )
 
}
export default FischerSections;