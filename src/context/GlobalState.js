import React, {  useReducer } from 'react';
import AppContext from './app-context';
import {  UPDATE_OMNIBOX_FILTER} from './actions';
import appReducer from './reducers';

const GlobalState = props => {
 

  const omniboxFilter = '';

  const [appState, dispatch] = useReducer(appReducer, { omniboxFilter: 'initial' });

  const updateOmniboxFilter = omnibox => {
    dispatch({ type: UPDATE_OMNIBOX_FILTER, omnibox: omnibox });
  }

 
//console.info('GlobalState - updateOmniboxFilter', updateOmniboxFilter);
  return (
    <AppContext.Provider
      value={{
        omniboxFilter: appState.omniboxFilter,
        updateOmniboxFilter: updateOmniboxFilter,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default GlobalState;
