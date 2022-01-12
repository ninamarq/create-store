import React, { useContext, useEffect } from 'react';
import globalContext from '../context/globalContext';
import ProductCard from '../components/ProductCard';
import Categories from '../components/Categories';
import RedirectToCart from '../components/RedirectToCart';
import { getProductsByQuery, getProductsFromCategoryAndQuery } from '../services/productsAPI';

export default function Principal() {
  const { handleSearch, search, category,
    products, setProducts } = useContext(globalContext);

  useEffect(async () => {
    if (category.length === 0 && search.length === 0) {
      const initial_products = await getProductsByQuery("gamer");
      setProducts(initial_products);
    }
  }, []);

  async function handleClickSearch() {
    if (category.length === 0) {
      const productsResult = await getProductsByQuery(search);
      setProducts(productsResult);
    }
    if (category.length > 0) {
      const productsQueryCat = await getProductsFromCategoryAndQuery({ id: category }, search);
      setProducts(productsQueryCat);
    }
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
      <Categories />
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
      <RedirectToCart />
      {
        category.length === 0 ? verifyProducts
        : (
          <ProductCard list={ products }/>
        )
      }
    </div>
  );
}
