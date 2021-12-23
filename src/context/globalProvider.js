import React, { useState } from 'react';
import { getProductsByCategory } from '../services/productsAPI';
import globalContext from './globalContext';

function Provider({ children }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);

  async function handleSearch({ target }) {
   setSearch(target.value);
  }

  // Trabalhar aqui amanhã!
  async function selectCategory({ target }) {
    setCategory(target.id);
    const categoriedProducts = await getProductsByCategory(target);
    setProducts(categoriedProducts);
  }

  const provideObj = {
    search,
    handleSearch,
    selectCategory,
    category,
    products,
    setProducts,
  };

  return (
    <globalContext.Provider value={ provideObj }>
      { children }
    </globalContext.Provider>
  )
}

export default Provider;
