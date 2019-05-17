import React, {  useReducer } from 'react';
import AppContext from './app-context';
import {UPDATE_OMNIBOX_FILTER, UPDATE_COMMUNITIES_PAGE, UPDATE_COMMUNITIES_DATA} from './actions';
import appReducer from './reducers';
import axios from 'axios';


const GlobalState = props => {
 
 // let communitiesData = [];

  const [appState, dispatch] = useReducer(appReducer, { 
    omniboxFilter: 'none',
    communitiesPage: 0,
    communitiesData: [{}, {}],
  });

  if (appState.communitiesData.length <= 2) {
   
    axios.defaults.headers.common = {'Authorization': `Bearer ${window.sessionStorage.accessToken}`}

    axios.get('https://rest-staging.fischermgmt.com/api/v3/communities?filters[code][operator]=LIKE&filters[code][value]=AR%&filters[name][operator]=LIKE&filters[name][value]=A%',
    )
    .then(function (response) {
      //console.log(response);
      console.info (response.data);
   //   communitiesData = response.data;
      dispatch({ type: UPDATE_COMMUNITIES_DATA, data: response.data});

    })
  }

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
        communitiesData: appState.communitiesData,
      }}
    >
    {props.children}
    </AppContext.Provider>
  );
};

export default GlobalState;
