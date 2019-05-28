import React from 'react';

export default React.createContext({
  omniboxFilter: '',
  setOmniboxFilter: omniBox => {console.info('Original initialized updater fn()');},
  communitiesPage: 0,
  updateCommunitiesPage: page => {console.info('Original initialized communities pager fn()');},
  communitiesData: [],
});
