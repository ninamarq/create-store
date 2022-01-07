import React from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectToCart() {
  const navigate = useNavigate()

  function redirectCart() {
    navigate('/cart');
  }

  return (
    <button
    type="button"
    onClick={ redirectCart }
    >
      🛒
    </button>
  );
}
