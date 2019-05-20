import {
  UPDATE_OMNIBOX_FILTER, 
  UPDATE_COMMUNITIES_PAGE, 
  UPDATE_LAST_FETCHED_COMMUNITIES_PAGE,
  UPDATE_COMMUNITIES_DATA,
} from './actions';

const initialState = {
  omniboxFilter: ''
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_OMNIBOX_FILTER:
      const result = { ...state, omniboxFilter: action.omnibox};
      return result;

    case UPDATE_COMMUNITIES_PAGE:
      return { ...state, communitiesPage: action.page};

    case UPDATE_LAST_FETCHED_COMMUNITIES_PAGE:
      return { ...state, lastFetchedCommunitiesPage: action.page};  

    case UPDATE_COMMUNITIES_DATA:
      return { ...state, communitiesData: action.data};  
    // case SET_COMMUNITIES_FETCH_ACTIVE:
    //   return { ...state, communitiesFetchIsActive: action.data};

    default:
    return state;
  }
};

export default appReducer;
