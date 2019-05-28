import React from 'react';

export default React.createContext({
  omniboxFilter: '',
  setOmniboxFilter: omniBox => {console.info('Original initialized updater fn()');},
  communitiesPage: 0,
  setCommunitiesPage: page => {console.info('Original initialized communities pager fn()');},
  communitiesData: [],
});
