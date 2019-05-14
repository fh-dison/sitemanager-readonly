import React from 'react';
import ReactDataGrid from 'react-data-grid';

 class DataGridDemo extends React.Component {
  constructor(props) {
    super(props);
 
    this.columns = [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' },
      { key: 'count', name: 'Count' } ];

     this.rows = [{id: 0, title: 'row1', count: 20}, {id: 1, title: 'row1', count: 40}, {id: 2, title: 'row1', count: 60}];

  }

  render() {
    return (
      <ReactDataGrid
      columns={this.columns}
      rowGetter={i => this.rows[i]}
      rowsCount={3}
      minHeight={150} 
      />    
    )
}
}
export default DataGridDemo;