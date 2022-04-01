import React, { useContext } from 'react';
import globalContext from '../context/globalContext';
import { useNavigate } from "react-router-dom";
import { getProductsByQuery, getProductsFromCategoryAndQuery } from '../services/productsAPI';

export default function Search() {
  const { handleSearch, category,
    search, setProducts } = useContext(globalContext);
  const navigate = useNavigate();

  async function handleSubmitSearch(event) {
    event.preventDefault();
    if (category.length === 0) {
      const productsResult = await getProductsByQuery(search);
      setProducts(productsResult);
      navigate('/');
    }
    if (category.length > 0) {
      const productsQueryCat = await getProductsFromCategoryAndQuery({ id: category }, search);
      setProducts(productsQueryCat);
      navigate('/');
    }
  }

  return(
    <form
    onSubmit={ (e) => handleSubmitSearch(e) }
    className='search-bar'
    >
      <input
        className='searchbar-input'
        type="text"
        onChange={ handleSearch }
        placeholder="Digite o produto"
      />
      <buttton
      type="button"
      id="searchbar-button"
      onClick={ (e) => handleSubmitSearch(e) }>
        <img
          src="https://img.icons8.com/ios/50/000000/search--v4.png"
          alt='Lupa para pesquisa'
          width="20px"
        />
      </buttton>
    </form>
  );
}
