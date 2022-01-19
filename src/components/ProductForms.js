import React, { useContext } from "react";
import globalContext from "../context/globalContext";

export default function ProductForms() {
  const { cart, limitCarac } = useContext(globalContext);
  return(
  <section
  className="products-form"
  >
    <h3>Revise seus Produtos</h3>
      {
        cart.map((product) => (
          <section
            key={ product.title }
            className="product-card-check"
          >
            <img
            width="100px"
              src={ product.thumbnail }
              alt={ product.title }
            />
            <h4
              className="product-card-check-title"
            >
              { limitCarac(product.title) }
            </h4>
            <h4
              className="product-card-check-other"
            >
              Qtde: { product.quantity }
            </h4>
            <h4
              className="product-card-check-other"
            >
              R${ product.price }
            </h4>
          </section>
        ))
      }
      <h3>Total:
        {
          cart.reduce((previous, product) => previous + ( product.price * product.quantity), 0).toFixed(2)
        }
      </h3>
    </section>
  );
}
