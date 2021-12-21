import React, { useState } from 'react';
import globalContext from './globalContext';
import { getProductsByQuery } from '../services/productsAPI';

function Provider({ children }) {
  const [products, setProducts] = useState([]);

  function handleSearch({ target }) {
    setProducts(async () => {
      const result = await getProductsByQuery(target.value)
      return result
    });
  }

  const provideObj = {
    products,
    setProducts,
    handleSearch,
  };

  return (
    <globalContext.Provider value={ provideObj }>
      { children }
    </globalContext.Provider>
  )
}

export default Provider;
