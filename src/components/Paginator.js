import React from 'react';

import { TextField } from '@material-ui/core';
//import { isContext } from 'vm';

const Paginator = (props) => {
  //const context = useContext(AppContext);
  return (
    <>
    Goto Page <TextField  type="input"
      onKeyUp={e=>{
      //  props.context.updateOmniboxFilter(e.target.value)  
      console.info ("Paginator updating as ", e.target.value);
      props.context.updateCommunitiesPage(e.target.value);
      }}

    
    /> 
    </>
    )
}
export default Paginator;
