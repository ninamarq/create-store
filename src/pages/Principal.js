import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import globalContext from '../context/globalContext';
import ProductCard from '../components/ProductCard';
import { getProductsByQuery, getProductsFromCategoryAndQuery } from '../services/productsAPI';

export default function Principal() {
  const navigate = useNavigate()
  const { handleSearch, search, category,
    products, setProducts } = useContext(globalContext);

  useEffect(async () => {
    const initial_products = await getProductsByQuery("gamer");
    setProducts(initial_products);
  }, []);

  async function handleClickSearch() {
    if (category.length === 0) {
      const productsResult = await getProductsByQuery(search);
      setProducts(productsResult);
    }
    if (category.length > 0) {
      const productsQueryCat = await getProductsFromCategoryAndQuery(category, search);
      setProducts(productsQueryCat);
    }
  }

  function redirectCart() {
    navigate('/cart');
  }

  const verifyProducts = (
    products.length === 0 ?
      (<h4>
        Nenhum produto foi encontrado!
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
