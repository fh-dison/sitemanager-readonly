import {  UPDATE_OMNIBOX_FILTER} from './actions';

const initialState = {
  omniboxFilter: ''
};

const appReducer = (state = initialState, action) => {
//  debugger;
  switch (action.type) {
    case UPDATE_OMNIBOX_FILTER:
    const result = { ...state, omniboxFilter: action.omnibox};
      console.info('appReducer() returning ', result);
      return result;

    default:
    return state;
  }
};

export default appReducer;
