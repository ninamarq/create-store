import React from "react";
import { useNavigate } from "react-router-dom";
import cart from '../images/cart2.ico'

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
      <img
      src={ cart }
      width="25px"
      />
    </button>
  );
}
