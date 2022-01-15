import React, { useState } from 'react';
import { getProductsByCategory } from '../services/productsAPI';
import globalContext from './globalContext';

function Provider({ children }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [details, setDetail] = useState({});
  const [cart, setCart] = useState([]);
  const [buyerData, setData] = useState({
    name: '',
    cpf: 0,
    email: '',
    tel: 0,
    cep: 0,
    street: '',
    neighborhood: '',
    comp: 0,
    number: 0,
    city: '',
    state: 'AC',
    payment: 'Boleto',
    numberCard: 0,
    validate: '',
    securityCode: 0,
  });
  const [confirmShop, setConfirm] = useState(false);
  const [finishShop, setFinished] = useState(false);


  async function handleSearch({ target }) {
   setSearch(target.value);
  }

  async function selectCategory({ target }) {
    setCategory(target.value);
    const categoriedProducts = await getProductsByCategory(target.value);
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

  function clearCart() {
    setCart(cart.filter((element) => element.title === 'clear cart'))
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
    setData,
    buyerData,
    confirmShop,
    setConfirm,
    finishShop,
    setFinished,
    clearCart,
  };

  return (
    <globalContext.Provider value={ provideObj }>
      { children }
    </globalContext.Provider>
  )
}

export default Provider;
