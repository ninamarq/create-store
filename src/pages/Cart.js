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
      <button
        onClick={() => navigate('/')}
      >Voltar</button>
    </div>
  )
}
