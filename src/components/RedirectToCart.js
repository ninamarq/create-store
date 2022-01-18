import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';

export default function RedirectToCart() {
  const navigate = useNavigate()

  function redirectCart() {
    navigate('/cart');
  }

  return (
    <button
    className="to-cart"
    type="button"
    onClick={ redirectCart }
    >
      <FaShoppingCart />
      {/* <img
      src={ cart }
      width="25px"
      /> */}
    </button>
  );
}
