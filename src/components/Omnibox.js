import React, { /* useState, */  useContext, /* useEffect */ } from 'react';
import AppContext from '../context/app-context';

import { TextField } from '@material-ui/core';

const Omnibox = () => {
  const context = useContext(AppContext);
  return (
    <>
     <span className="material-icons MuiIcon-root MuiIcon-fontSizeSmall" aria-hidden="true" title="Search">search</span> <TextField  type="input"
      onKeyUp={e=>{context.setOmniboxFilter(e.target.value)  }}

    
    /> 
    </>
    )
}
export default Omnibox;
