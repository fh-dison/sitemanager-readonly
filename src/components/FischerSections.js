import React from 'react';
import ReactDataGrid from 'react-data-grid';
import {fischerSectionsRows,fischerSectionsColumns} from 'mockdata/fischerSectionsData';

 class FischerSections extends React.Component {
  constructor(props) {
    super(props);
 
     this.rows = fischerSectionsRows;
     this.columns = fischerSectionsColumns;
  }

  render() {
    
    return (
      <>
           React Data Grid <strong>https://adazzle.github.io/react-data-grid/</strong>

      <ReactDataGrid
      columns={this.columns}
      rowGetter={i => this.rows[i]}
      rowsCount={this.rows.length}
      minHeight={500} 
      />
          Total {this.rows.length}

      </>    
    )
    
}
}
export default FischerSections;