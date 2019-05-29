import React, {  useReducer } from 'react';
import AppContext from './app-context'; 
import {
  SET_OMNIBOX_FILTER, 
  SET_COMMUNITIES_PAGE, 
  UPDATE_LAST_FETCHED_COMMUNITIES_PAGE,
  UPDATE_COMMUNITIES_DATA,
  SET_ACCESS_TOKEN,
  SET_FISCHER_SECTIONS_PAGE,
  UPDATE_LAST_FETCHED_FISCHER_SECTIONS_PAGE,
  UPDATE_FISCHER_SECTIONS_DATA,
} from './actions'; 

import appReducer from './reducers';
import { REST_API_SUCCESS } from 'lib/RestStatus';
import {endpointActionUsingAccessToken} from '../lib/DataTools';
import {setupEndpoint} from '../lib/Endpoint';

// Refer to point #8
//const Store = props => {
function Store (props) {
 
  const [appState, dispatch] = useReducer(appReducer, { 
    omniboxFilter: '',
    communitiesPage: 1,
    communitiesData: {data: []},
    lastFetchedCommunitiesPage: -1,
    fischerSectionsPage: 1,
    fischerSectionsData: {data: []},
    lastFetchedFischerSectionsPage: -1,
    accessToken: '',
    needSync: false,
  });

  /**
   * Setter for accessToken
   * @param {string=} token 
   */
  function setAccessToken (token) {
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
  function setOmniboxFilter (omnibox) {
    dispatch({ type: SET_OMNIBOX_FILTER, target: omnibox });
  }
    
  /**
   * Setter for Communities Page
   * @param {integer=} page 
   */
  function setCommunitiesPage (page) {
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
  * Synchronizes current Communities data to current page (communitiesPage)
  */
  function syncCurrentCommunitiesPage() {
    if (appState.needSync || appState.lastFetchedCommunitiesPage !== appState.communitiesPage) {
      syncPageData(
        appState.communitiesPage, 
        'communities', 
        communitiesDataFormatter,
        {
          updateData:  UPDATE_COMMUNITIES_DATA,
          updateLastFetched: UPDATE_LAST_FETCHED_COMMUNITIES_PAGE,
          updatePage:  SET_COMMUNITIES_PAGE,
        },
        {includes: 'division'});
      }
  }


  // Experimental fischer sections formatter
  const fischerSectionsDataFormatter = (data) => {

    if (! data.data || ! Array.isArray(data.data)) {
      return data;
    }
    const formatted = data.data.map(fischerSection=>{
      return {
        community_code: fischerSection.community_id,
        section_name: fischerSection.section_name,
        spec_level: fischerSection.spec_level_id,
      };
    });
    return {...data, data: formatted}
  }


  /**
  * Synchronizes current FischerSections data to current page (communitiesPage)
  */
  function syncCurrentFischerSectionsPage() {
    if (appState.needSync || appState.lastFetchedFischerSectionsPage!== appState.fischerSectionsPage) {
      syncPageData(
        appState.fischerSectionsPage, 
        'fischerSections', 
        fischerSectionsDataFormatter,
        {
          updateData:  UPDATE_FISCHER_SECTIONS_DATA,
          updateLastFetched: UPDATE_LAST_FETCHED_FISCHER_SECTIONS_PAGE,
          updatePage:  SET_FISCHER_SECTIONS_PAGE,
        });
      }
  }



  /**
   * Synchronizes via REST API to current page 
   * @param {integer=} currentPage
   * @param {string=} dataSet
   * @param {function=} formatter 
   * @param {object=} actions
   */
  function syncPageData(currentPage, dataSet, formatter, actions, requiredUrlParams = {}) {
  
    endpointActionUsingAccessToken(
      setupEndpoint(`/api/v3/${dataSet}`, appState.omniboxFilter, currentPage, requiredUrlParams), 
      appState.accessToken, 
      setAccessToken, 
      formatter)
      .then(response => {
        if (response.status === REST_API_SUCCESS) {
          dispatch({ type: actions.updateData, target: response.data});  
          dispatch({ type: actions.updateLastFetched, target: currentPage});

          // TODO:  Is this test needed?
          //if (response.data.current_page) {
            console.info('sync setting comm. page to current_page', response.data.current_page);
            dispatch({ type: actions.updatePage, target: response.data.current_page });
          //}

          // TODO: Need page number info from API call
        } else {
          // Something for UI to display an error message
        }
      })
    
  }


  /**
   * Setter for FischerSections Page
   * @param {integer=} page 
   */
   function setFischerSectionsPage (page) {
    dispatch({ type: SET_FISCHER_SECTIONS_PAGE, target: page });
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

        fischerSectionsPage: appState.fischerSectionsPage,
        setFischerSectionsPage: setFischerSectionsPage,
        syncCurrentFischerSectionsPage: syncCurrentFischerSectionsPage,
        fischerSectionsData: appState.fischerSectionsData,
        lastFetchedFischerSectionsPage: appState.lastFetchedFischerSectionsPage,

        setAccessToken: setAccessToken,
        accessToken: appState.accessToken,
        needSync: appState.needSync,
      }}
    >
    {props.children}
    </AppContext.Provider>
  );
};

export default Store;
