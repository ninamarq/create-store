import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";

export default function Principal() {
  const navigate = useNavigate()
  
  function redirectCart() {
    navigate('/cart');
  }

  return (
    <div>
      <label>
        <input
          type="text"
          placeholder='🔎'
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
