import {
  SET_OMNIBOX_FILTER, 
  SET_COMMUNITIES_PAGE, 
  UPDATE_LAST_FETCHED_COMMUNITIES_PAGE,
  UPDATE_COMMUNITIES_DATA,
  SET_ACCESS_TOKEN,
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

    default:
    return state;
  }
};

export default appReducer;
