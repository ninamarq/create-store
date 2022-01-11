import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <h2
        onClick={ () => navigate('/') }
      >createStore()</h2>
    </header>
  )
}

export default Header;
