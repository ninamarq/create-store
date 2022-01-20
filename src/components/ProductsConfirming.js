import React, { useContext } from "react";
import globalContext from "../context/globalContext";

export default function ProductsConfirming() {
  const { cart, limitCarac } = useContext(globalContext);
  return(
      cart.map((product) => (
        <section
            className="card-confirming"
          >
            <img
            width="100px"
              src={ product.thumbnail }
              alt={ product.title }
            />
            <h4
              className="card-confirming-title"
            >
              { limitCarac(product.title) }
            </h4>
            <h4
              className="card-confirming-qtd"
            >
              Qtde: { product.quantity }
            </h4>
            <h4
              className="card-confirming-price"
            >
              R${ product.price }
            </h4>
          </section>
      ))
  )
}