import React, {  useReducer } from 'react';
import AppContext from './app-context';
import {
  UPDATE_OMNIBOX_FILTER, 
  UPDATE_COMMUNITIES_PAGE, 
  UPDATE_LAST_FETCHED_COMMUNITIES_PAGE,
  UPDATE_COMMUNITIES_DATA,
  SET_ACCESS_TOKEN,
} from './actions';
import appReducer from './reducers';
import {
  REST_API_SUCCESS,
} from 'lib/RestStatus';
import {loadEndpointUsingAccessKey} from '../lib/DataTools';


// Could be named Store
const GlobalState = props => {
 
  const [appState, dispatch] = useReducer(appReducer, { 
    omniboxFilter: 'none',
    communitiesPage: 0,
    communitiesData: [],
    fetchCurrentCommunitiesData: () =>{},
    lastFetchedCommunitiesPage: -1,
    accessToken: '',
  });

  /**
   * Setter for accessToken
   * @param {string=} token 
   */
  const setAccessToken = token => {
    dispatch({ type: SET_ACCESS_TOKEN, target: token });
  }

  /**
   * Setter for Omnibox
   * @param {string=} omnibox 
   */
  const updateOmniboxFilter = omnibox => {
    dispatch({ type: UPDATE_OMNIBOX_FILTER, target: omnibox });
  }
    
  /**
   * Setter for Communities Page
   * @param {integer=} page 
   */
  const updateCommunitiesPage = page => {
    dispatch({ type: UPDATE_COMMUNITIES_PAGE, target: page });
  }

  /**
   * Synchronizes current Communities data via REST API to current page (communitiesPage)
   */
  const syncCurrentCommunitiesPage = () => {

    if (appState.lastFetchedCommunitiesPage !== appState.communitiesPage && appState.accessToken.length > 0) {
       loadEndpointUsingAccessKey('/api/v3/communities?page=1', appState.accessToken)
      .then(response => {
        if (response.status === REST_API_SUCCESS) {
          dispatch({ type: UPDATE_COMMUNITIES_DATA, target: response.data});  
          dispatch({ type: UPDATE_LAST_FETCHED_COMMUNITIES_PAGE, target: appState.communitiesPage});
          if (response.accessToken !== appState.accessToken) {
            dispatch({ type: SET_ACCESS_TOKEN, target: response.accessToken });
          }
        } else {
          // Something for UI to display an error message
        }
      })
    }
  }

  return (
    <AppContext.Provider
      value={{
        omniboxFilter: appState.omniboxFilter,
        updateOmniboxFilter: updateOmniboxFilter,
        communitiesPage: appState.communitiesPage,
        updateCommunitiesPage: updateCommunitiesPage,
        syncCurrentCommunitiesPage: syncCurrentCommunitiesPage,
        communitiesData: appState.communitiesData,
        lastFetchedCommunitiesPage: appState.lastFetchedCommunitiesPage,
        setAccessToken: setAccessToken,
        accessToken: appState.accessToken,
      }}
    >
    {props.children}
    </AppContext.Provider>
  );
};

export default GlobalState;
