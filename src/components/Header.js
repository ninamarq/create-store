import React from "react";
import { useNavigate } from "react-router-dom";
import Categories from './Categories';
import Search from './Search';
import RedirectToCart from '../components/RedirectToCart';
import '../style/Header.css';

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <section
        id="title-logo"
        onClick={ () => navigate('/') }
      >
        <h2
        >createStore( )</h2>
      </section>
      <Search />
      <Categories />
      <RedirectToCart />
    </header>
  )
}

export default Header;
