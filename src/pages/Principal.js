import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import globalContext from '../context/globalContext';
import ProductCard from '../components/ProductCard';
import { getProductsByQuery } from '../services/productsAPI';

export default function Principal() {
  const navigate = useNavigate()
  const { handleSearch, search, category,
    products, setProducts } = useContext(globalContext);

  async function handleClickSearch() {
    const productsResult = await getProductsByQuery(search);
    setProducts(productsResult);
  }

  function redirectCart() {
    navigate('/cart');
  }

  const verifyProducts = (
    products.length === 0 ?
      (<h4>
        Digite algum termo de pesquisa ou escolha uma categoria
      </h4>)
      : <ProductCard list={ products }/>
  );

  return (
    <div>
      <label>
        <input
          type="text"
          onChange={ handleSearch }
          placeholder="Digite o produto"
        />
        <button
          type="button"
          onClick={ handleClickSearch }
        >
          Buscar 🔎
        </button>
      </label>
      <button
        type="button"
        onClick={ redirectCart }
      >
        🛒
      </button>
      {
        category.length === 0 ? verifyProducts
        : (
          <ProductCard list={ products }/>
        )
      }
    </div>
  );
}
