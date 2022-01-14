import React from "react";
import { useNavigate } from "react-router-dom";
import Categories from './Categories';
import Search from './Search';
import RedirectToCart from '../components/RedirectToCart';

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <h2
        onClick={ () => navigate('/') }
      >createStore()</h2>
      <Categories />
      <Search />
      <RedirectToCart />
    </header>
  )
}

export default Header;
