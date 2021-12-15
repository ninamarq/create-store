import React, { useState } from 'react';
import globalContext from './globalContext';

function Provider({ children }) {
  const [state] = useState("testando context e provider");

  const provideObj = {
    state,
  };

  return (
    <globalContext.Provider value={ provideObj }>
      {children}
    </globalContext.Provider>
  )
}

export default Provider;
