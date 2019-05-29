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

const initialState = {
  omniboxFilter: ''
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OMNIBOX_FILTER:
      return { ...state, omniboxFilter: action.target, needSync: true};
    case SET_COMMUNITIES_PAGE:
      return { ...state, communitiesPage: action.target};
    case UPDATE_LAST_FETCHED_COMMUNITIES_PAGE:
      return { ...state, lastFetchedCommunitiesPage: action.target};  
    case UPDATE_COMMUNITIES_DATA:
      return { ...state, communitiesData: action.target};  
    case SET_ACCESS_TOKEN:
       return { ...state, accessToken: action.target};
    case SET_FISCHER_SECTIONS_PAGE:
      return { ...state, fischerSectionsPage: action.target}
    case UPDATE_LAST_FETCHED_FISCHER_SECTIONS_PAGE:
      return { ...state, lastFetchedFischerSectionsPage: action.target};  
    case UPDATE_FISCHER_SECTIONS_DATA:
      return { ...state, fischerSectionsData: action.target};  
    default:
    return state;
  }
};

export default appReducer;
