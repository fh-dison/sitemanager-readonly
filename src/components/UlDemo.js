import React from 'react';
import ReactDataGrid from 'react-data-grid';

 class UlDemo extends React.Component {
  constructor(props) {
    super(props);
 
    this.columns = [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' },
      { key: 'count', name: 'Count' } ];

     this.rows = [
         {division: '07', community_code: 'ABN', community_name: 'ABINGTON', budget_neighborhood: 'ABINGTON'}, 
         {division: '71', community_code: 'ALD', community_name: 'ATLANTA DESIGN CENTER', budget_neighborhood: ''}, 
         {division: '61', community_code: 'ANP', community_name: 'ANSLEY PARK', budget_neighborhood: 'ANSLEY PARK'}, 


    ];

  }

  render() {
    return (
    <React.Fragment>
    -- Ul  Demo --

    <ul style={{listStyle: 'none'}}>
        {this.rows.map((e, i)=> 
        <li key={i}>{e.division} {e.community_code} {e.community_name} {e.budget_neighborhood}</li>
    )}
    </ul>
    </React.Fragment>    
   
        

 
        
    )
}
}
export default UlDemo;