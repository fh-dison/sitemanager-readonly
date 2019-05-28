import React from 'react';

import { TextField } from '@material-ui/core';

const Paginator = (props) => {
  return (
    <>
    Goto Page <TextField  type="input"
      onKeyUp={e=>{
      console.clear();
      console.info ("Paginator updating as ", e.target.value);
      props.context.setCommunitiesPage(e.target.value);
      }}

    
    /> 
    </>
    )
}
export default Paginator;
