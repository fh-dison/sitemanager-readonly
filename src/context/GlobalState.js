import React, {  useReducer } from 'react';
import AppContext from './app-context';
import {
  UPDATE_OMNIBOX_FILTER, 
  UPDATE_COMMUNITIES_PAGE, 
  UPDATE_LAST_FETCHED_COMMUNITIES_PAGE,
  UPDATE_COMMUNITIES_DATA,
} from './actions';
import appReducer from './reducers';
import axios from 'axios';



// Could be named Store
const GlobalState = props => {
 
  const [appState, dispatch] = useReducer(appReducer, { 
    omniboxFilter: 'none',
    communitiesPage: 0,
    communitiesData: [],
    fetchCurrentCommunitiesData: () =>{},
    lastFetchedCommunitiesPage: -1,
  });


  const updateOmniboxFilter = omnibox => {
    dispatch({ type: UPDATE_OMNIBOX_FILTER, omnibox: omnibox });
  }
    
  /**
   * Updates global page metadata for Communities
   * @param {integer=} page 
   */
  const updateCommunitiesPage = page => {
    dispatch({ type: UPDATE_COMMUNITIES_PAGE, page: page });
  }


  /**
   * Synchronizes current Communities REST API data to current page (communitiesPage)
   *
   */
  const syncCurrentCommunitiesPage = () => {

    console.info ('syncCurrentCommunitiesPage()', appState.communitiesPage, appState.lastFetchedCommunitiesPage);


    if (appState.lastFetchedPage !== appState.communitiesPage) {

      // axios.defaults.headers.common = {'Authorization': `Bearer ${window.sessionStorage.accessToken}`}
      // axios.get('https://rest-staging.fischermgmt.com/api/v3/communities?filters[code][operator]=LIKE&filters[code][value]=AR%&filters[name][operator]=LIKE&filters[name][value]=A%',
      // )


      axios.get(`https://reqres.in/api/users?page=${appState.communitiesPage}`)

      .then(function (response) {
        console.info ('getCurrentCommunitiesData() promise resolving with', response.data, 'lastFetched set to ', appState.communitiesPage);
        dispatch({ type: UPDATE_COMMUNITIES_DATA, data: response.data});  
        dispatch({ type: UPDATE_LAST_FETCHED_COMMUNITIES_PAGE, data: appState.communitiesPage});
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
      }}
    >
    {props.children}
    </AppContext.Provider>
  );
};

export default GlobalState;
