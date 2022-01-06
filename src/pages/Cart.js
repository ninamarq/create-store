import React, { useContext } from "react";
import globalContext from "../context/globalContext";
import { useNavigate } from "react-router-dom";
import ProductAtCard from '../components/ProductAtCart';

export default function Cart() {
  const navigate = useNavigate()
  const { cart } = useContext(globalContext);
  return(
    <div>
      {
        cart.length === 0 ? (
          <h5>
            Seu carrinho está vazio!
          </h5>
        ) : (
          <ProductAtCard list={ cart }/>
        )
      }
      <h1>Total: { 
        cart.reduce((previous, product) => previous + ( product.price * product.quantity), 0).toFixed(2)
      }</h1>
      <button
        onClick={() => navigate('/')}
      >Voltar</button>
    </div>
  )
}
