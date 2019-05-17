import React, { useState, useContext, useEffect } from 'react';
import {sitesRows, sitesColumns} from 'mockdata/sitesData';
import AppContext from '../context/app-context';

 const Sites = (props) => {

  const context = useContext(AppContext);
  console.info ("Sites (re)-rendering, filter is ", context.omniboxFilter);

  // TODO: Move to React Context 
    const rows = sitesRows;
    const columns = sitesColumns;
   
    return (
    <React.Fragment>
    -- Ul  Demo --

    <ul style={{listStyle: 'none'}}>
    
        <li>
        {columns.map ((e, i) => {
            return `${e.title}  `
        })}  

            </li>

        {rows.map((e, i)=> 
        <li key={i}>{e.div} {e.site} {e.site_number} {e.job_number} {e.fischer_section} {e.legal_section} {e.purchase_date}
        {e.check_number} {e.is_available} {e.pricing_group} {e.lopt_record_id} {e.site_cost} {e.site_premium} {e.extra_construction}
        </li>
    )}
    </ul>
    </React.Fragment>    

        
    )
 
}
export default Sites;