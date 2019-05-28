import React, {  useReducer } from 'react';
import AppContext from './app-context';
import {
  SET_OMNIBOX_FILTER, 
  SET_COMMUNITIES_PAGE, 
  UPDATE_LAST_FETCHED_COMMUNITIES_PAGE,
  UPDATE_COMMUNITIES_DATA,
  SET_ACCESS_TOKEN,
} from './actions';
import appReducer from './reducers';
import {
  REST_API_SUCCESS,
} from 'lib/RestStatus';
import {loadEndpointUsingAccessToken} from '../lib/DataTools';

const Store = props => {
 
  const [appState, dispatch] = useReducer(appReducer, { 
    omniboxFilter: 'none',
    communitiesPage: 1,
    communitiesData: {data: []},
    fetchCurrentCommunitiesData: () =>{},
    lastFetchedCommunitiesPage: -1,
    accessToken: '',
  });

  /**
   * Setter for accessToken
   * @param {string=} token 
   */
  const setAccessToken = token => {
    // Pre-initialize accessToken to value from URL bar
    if (appState.accessToken.length === 0) appState.accessToken = token;
    if (token === appState.accessToken) return;
    console.info('Setting new access token in Global State', token.substring(token.length - 30, token.length));
    dispatch({ type: SET_ACCESS_TOKEN, target: token });
  }

  /**
   * Setter for Omnibox
   * @param {string=} omnibox 
   */
  const setOmniboxFilter = omnibox => {
    dispatch({ type: SET_OMNIBOX_FILTER, target: omnibox });
  }
    
  /**
   * Setter for Communities Page
   * @param {integer=} page 
   */
  const setCommunitiesPage = page => {
    dispatch({ type: SET_COMMUNITIES_PAGE, target: page });
  }

  // Experimental communities formatter
  const communitiesDataFormatter = (data) => {

    if (! data.data || ! Array.isArray(data.data)) {
      return data;
    }
    const formatted = data.data.map(community=>{
      return {
        division: community.division.division,
        community_code: community.code,
        community_name: community.name,
        budget_neighborhood: community.division.division_name,
      };
    });
    return {...data, data: formatted}
  }
 

  /**
   * Synchronizes current Communities data via REST API to current page (communitiesPage)
   */
  const syncCurrentCommunitiesPage = () => {
    if (appState.lastFetchedCommunitiesPage !== appState.communitiesPage && appState.accessToken.length > 0) {
       const url = `/api/v3/communities?per_page=10&includes=division&page=${appState.communitiesPage}`;
       loadEndpointUsingAccessToken(url, appState.accessToken, setAccessToken, communitiesDataFormatter)
      .then(response => {
        if (response.status === REST_API_SUCCESS) {
          dispatch({ type: UPDATE_COMMUNITIES_DATA, target: response.data});  
          dispatch({ type: UPDATE_LAST_FETCHED_COMMUNITIES_PAGE, target: appState.communitiesPage});
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
        setOmniboxFilter: setOmniboxFilter,
        communitiesPage: appState.communitiesPage,
        setCommunitiesPage: setCommunitiesPage,
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

export default Store;
