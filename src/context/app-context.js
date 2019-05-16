import React from 'react';

export default React.createContext({
  omniboxFilter: '',
  updateOmniboxFilter: omniBox => {console.info('Original initialized updater fn()');},
});
