import React, {  useReducer } from 'react';
import AppContext from './app-context';
import {UPDATE_OMNIBOX_FILTER, UPDATE_COMMUNITIES_PAGE, UPDATE_COMMUNITIES_DATA} from './actions';
import appReducer from './reducers';
import axios from 'axios';

// Could be named Store
const GlobalState = props => {
 
  const [appState, dispatch] = useReducer(appReducer, { 
    omniboxFilter: 'none',
    communitiesPage: 0,
    communitiesData: [],
    fetchCurrentCommunitiesData: () =>{}
  });


  const updateOmniboxFilter = omnibox => {
    dispatch({ type: UPDATE_OMNIBOX_FILTER, omnibox: omnibox });
  }

  const updateCommunitiesPage = page => {
    //  TODO:  Go to API and fetch selected page, .then(communitiesData = data; dispatch) .catch('Show some error')
    dispatch({ type: UPDATE_COMMUNITIES_PAGE, page: page });

  }

  const fetchCurrentCommunitiesData = () => {

    //  TODO:  Deal with paging 
    if (appState.communitiesData.length === 0) {
   
      // axios.defaults.headers.common = {'Authorization': `Bearer ${window.sessionStorage.accessToken}`}
      // axios.get('https://rest-staging.fischermgmt.com/api/v3/communities?filters[code][operator]=LIKE&filters[code][value]=AR%&filters[name][operator]=LIKE&filters[name][value]=A%',
      // )

      const requestDetails = {

        //token: "yJK-1kzbodLxjGQD_8rDMQ",
        token: "7yDxKTCDoT4hTiB9-27c8w",
  
        data: {
          name: "nameFirst",
          email: "internetEmail",
          phone: "phoneHome",
          _repeat: 3
        }
      };
      axios({
        method: "post",
        url: "https://app.fakejson.com/q",
        data: requestDetails,
    //    transformResponse: [dataParser, dataFormatter],
      }) 

      .then(function (response) {
        console.info ('getCurrentCommunitiesData() promise resolving with', response.data);
        dispatch({ type: UPDATE_COMMUNITIES_DATA, data: response.data});  
      })
    }

    console.info('getCurrentCommunitiesData is returning', appState.communitiesData);
    return appState.communitiesData;
  }

  return (
    <AppContext.Provider
      value={{
        omniboxFilter: appState.omniboxFilter,
        updateOmniboxFilter: updateOmniboxFilter,
        communitiesPage: appState.communitiesPage,
        updateCommunitiesPage: updateCommunitiesPage,
        fetchCurrentCommunitiesData: fetchCurrentCommunitiesData,
        communitiesData: appState.communitiesData,
      }}
    >
    {props.children}
    </AppContext.Provider>
  );
};

export default GlobalState;
