import React, { useState } from 'react';
import { getProductsByCategory } from '../services/productsAPI';
import globalContext from './globalContext';

function Provider({ children }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [details, setDetail] = useState({});
  const [cart, setCart] = useState([]);

  async function handleSearch({ target }) {
   setSearch(target.value);
  }

  async function selectCategory({ target }) {
    setCategory(target.id);
    const categoriedProducts = await getProductsByCategory(target);
    setProducts(categoriedProducts);
  }

  function addToCart(product) {
    setCart([...cart, product]);
  }

  const provideObj = {
    search,
    handleSearch,
    selectCategory,
    category,
    products,
    setProducts,
    details,
    setDetail,
    cart,
    addToCart,
  };

  return (
    <globalContext.Provider value={ provideObj }>
      { children }
    </globalContext.Provider>
  )
}

export default Provider;
