import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../context/app-context';

import { TextField } from '@material-ui/core';

const Omnibox = () => {
  const context = useContext(AppContext);
  return (
    <>
    Filter <TextField  type="input"
      onKeyUp={e=>{context.updateOmniboxFilter(e.target.value)  }}

    
    /> 
    </>
    )
}
export default Omnibox;
