import React, { useState } from 'react';
import globalContext from './globalContext';

function Provider({ children }) {
  const [search, setSearch] = useState('');

  async function handleSearch({ target }) {
    setSearch(target.value);
  }

  const provideObj = {
    search,
    handleSearch,
  };

  return (
    <globalContext.Provider value={ provideObj }>
      { children }
    </globalContext.Provider>
  )
}

export default Provider;
