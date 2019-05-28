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


export function setupEndpoint(preamble, appState) {

    let filters = [];
    if (appState.omniboxFilter.length >= 1) {
     filters.push({column: 'name', operator: 'LIKE', value: `${appState.omniboxFilter}%`});
 //    filters.push({column: 'code', operator: 'LIKE', value: `${appState.omniboxFilter}%`});

    }
    let urlParameters = {
      per_page: 10,
      includes: 'division',
      page: appState.communitiesPage,
      filters: filters,
    };

    return preamble +  buildV3URL(urlParameters); 
  }