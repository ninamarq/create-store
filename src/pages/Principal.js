import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import globalContext from '../context/globalContext';

export default function Principal() {
  const navigate = useNavigate()
  const { handleSearch, products } = useContext(globalContext);


  console.log(products);
  function redirectCart() {
    navigate('/cart');
  }

  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="🔎"
          onChange={ handleSearch }
        />
      </label>
      <h4>
        Digite algum termo de pesquisa ou escolha uma categoria
      </h4>
      <button
        type="button"
        onClick={ redirectCart }
      >
        🛒
      </button>
    </div>
  );
}
