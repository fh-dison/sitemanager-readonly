import React from 'react';
import {sitesRows, sitesColumns} from 'mockdata/sitesData';

//import ReactDataGrid from 'react-data-grid';

 class Sites extends React.Component {
  constructor(props) {
    super(props);
 
    
    // [
    //   { key: 'id', name: 'ID' },
    //   { key: 'title', name: 'Title' },
    //   { key: 'count', name: 'Count' } ];

     this.rows = sitesRows;
     this.columns = sitesColumns;

    //  [
    //      {division: '07', community_code: 'ABN', community_name: 'ABINGTON', budget_neighborhood: 'ABINGTON'}, 
    //      {division: '71', community_code: 'ALD', community_name: 'ATLANTA DESIGN CENTER', budget_neighborhood: ''}, 
    //      {division: '61', community_code: 'ANP', community_name: 'ANSLEY PARK', budget_neighborhood: 'ANSLEY PARK'}, 


    // ];

  }
/*
  { name: 'div', title: 'Div' },
    { name: 'comm', title: 'Comm' },
    { name: 'site', title: 'Site' },
    { name: 'site_number', title: 'Site Number' },
    { name: 'job_number', title: 'Job Number' },
    { name: 'fischer_section', title: 'Fischer Section' },
    { name: 'legal_section', title: 'Legal Section' },
    { name: 'purchase_date', title: 'Purchase Date' },
    { name: 'check_number', title: 'Check Number' },
    { name: 'is_available', title: 'Is Available' },
    { name: 'pricing_group', title: 'Pricing Group' },
    { name: 'lopt_record_id', title: 'lopt_record_id' },
    { name: 'site_cost', title: 'Site Cost' },
    { name: 'site_premium', title: 'Site Premium' },
    { name: 'extra_construction', title: 'Extra Construction' },

*/
  render() {
    return (
    <React.Fragment>
    -- Ul  Demo --

    <ul style={{listStyle: 'none'}}>
    
        <li>
        {this.columns.map ((e, i) => {
            return `${e.title}  `
        })}  

            </li>

        {this.rows.map((e, i)=> 
        <li key={i}>{e.div} {e.site} {e.site_number} {e.job_number} {e.fischer_section} {e.legal_section} {e.purchase_date}
        {e.check_number} {e.is_available} {e.pricing_group} {e.lopt_record_id} {e.site_cost} {e.site_premium} {e.extra_construction}
        </li>
    )}
    </ul>
    </React.Fragment>    

        
    )
}
}
export default Sites;