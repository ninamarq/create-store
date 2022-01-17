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
    <div
    className='search-bar'
    >
      <input
        className='searchbar-input'
        type="text"
        onChange={ handleSearch }
        placeholder="Digite o produto"
      />
      <buttton
      type="submit"
      id="searchbar-button"
      onClick={ handleClickSearch }>
        <img
          src="https://img.icons8.com/ios/50/000000/search--v4.png"
          width="30px"
        />
      </buttton>
    </div>
  );
}
