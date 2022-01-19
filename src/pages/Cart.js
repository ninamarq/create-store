import React, { useContext } from "react";
import globalContext from "../context/globalContext";
import { useNavigate } from "react-router-dom";
import ProductAtCard from '../components/ProductAtCart';
import '../style/Cart.css';

export default function Cart() {
  const navigate = useNavigate()
  const { cart } = useContext(globalContext);
  return(
    <div
      className="cart-list"
    >
      {
        cart.length === 0 ? (
          <section
            className="empty-cart"
          >
            <h2>
              Seu carrinho está vazio!
            </h2>
            <p>Dê mais uma olhada nos nossos produtos!</p>
          </section>
        ) : (
          <ProductAtCard list={ cart }/>
        )
      }
      <h2>Total: R$
      { ' ' }
      { 
        cart.reduce((previous, product) => previous + ( product.price * product.quantity), 0).toFixed(2)
      }</h2>
      <button
        onClick={() => navigate('/')}
      >Voltar</button>
      <button
        onClick={() => navigate('/finish-shop/payment')}
      >Continuar Compra</button>
    </div>
  )
}
