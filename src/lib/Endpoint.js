  /**
   * URL builder - converts params object to URL string
   * @param {object=} params 
   */

function buildV3URL(params) {

  const defaultURLBuilder = (htmlParameter) => {
    return `${htmlParameter}=${ params[htmlParameter]}&`;
  };

  const customURLBuilders = {
    filters: (filters) => {
      return params[filters].reduce((acc, curr) => {
        return acc + `filters[${curr.column}][operator]=${curr.operator}&filters[${curr.column}][value]=${curr.value}&`;
      }, '');
    },
  }

  const keyToURLString = (acc, curr) => {
     const builder = (customURLBuilders.hasOwnProperty(curr)) ? customURLBuilders[curr] : defaultURLBuilder;
     return acc + builder(curr);
  }

  return  '?' + Object.keys(params).reduce(keyToURLString, '').slice(0, -1)
}

/**
  * Sets up endpoint by converting current appState values to URL string
  * @param {string=} preamble 
  * @param {object=} appState 
  */
  // TODO:  What column(s)?  
export function setupEndpoint(preamble, omniboxFilter, page, requiredUrlParams = {}) {

    let filters = [];
    if (omniboxFilter.length >= 1) {
     filters.push({column: 'name', operator: 'LIKE', value: `${omniboxFilter}%`});
 //    filters.push({column: 'code', operator: 'LIKE', value: `${appState.omniboxFilter}%`});

    }
    let urlParameters = {
      ...requiredUrlParams,
      per_page: 10,
      page: page,
      filters: filters,
    };
//  return { ...state, visibilityFilter: action.filter }
    return preamble +  buildV3URL(urlParameters); 
  }