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
    const checkingCart = cart.some((element) => element.id === product.id);
    if (checkingCart) {
      const newCart = cart.map((element) => {
        if (element.id === product.id) {
          element.quantity += 1;
        }
        return element;
      });
      setCart(newCart);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  }

  function removeFromCart(product) {
    const checkingCart = cart.some((element) => element.id === product.id);
    if (checkingCart) {
      const newCart = cart.map((element) => {
        if (element.id === product.id) {
          element.quantity -= 1;
        }
        return element;
      }).filter((element) => element.quantity > 0);
      setCart(newCart);
    }
  }

  function deleteFromCart(product) {
    setCart(cart.filter((element) => element.id !== product.id));
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
    removeFromCart,
    deleteFromCart,
  };

  return (
    <globalContext.Provider value={ provideObj }>
      { children }
    </globalContext.Provider>
  )
}

export default Provider;
