import React, {  useReducer } from 'react';
import AppContext from './app-context';
import {UPDATE_OMNIBOX_FILTER, UPDATE_COMMUNITIES_PAGE} from './actions';
import appReducer from './reducers';

const GlobalState = props => {
 
  let communitiesData = [];

  const [appState, dispatch] = useReducer(appReducer, { 
    omniboxFilter: 'none',
    communitiesPage: 0,
  });

  const updateOmniboxFilter = omnibox => {
    dispatch({ type: UPDATE_OMNIBOX_FILTER, omnibox: omnibox });
  }

  const updateCommunitiesPage = page => {
    //  TODO:  Go to API and fetch selected page, .then(communitiesData = data; dispatch) .catch('Show some error')
    dispatch({ type: UPDATE_COMMUNITIES_PAGE, page: page });
    // another dispatch for current (page of) data? 
  }


  return (
    <AppContext.Provider
      value={{
        omniboxFilter: appState.omniboxFilter,
        updateOmniboxFilter: updateOmniboxFilter,
        communitiesPage: appState.communitiesPage,
        updateCommunitiesPage: updateCommunitiesPage,
        //communitiesData: communitiesData,
      }}
    >
    {props.children}
    </AppContext.Provider>
  );
};

export default GlobalState;
