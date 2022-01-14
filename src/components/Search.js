import React, { useContext } from 'react';
import globalContext from '../context/globalContext';
import { getProductsByQuery, getProductsFromCategoryAndQuery } from '../services/productsAPI';

export default function Search() {
  const { handleSearch, category,
    search, setProducts } = useContext(globalContext);

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

  return(
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
  );
}
