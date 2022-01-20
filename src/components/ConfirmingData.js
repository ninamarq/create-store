import React, { useContext } from "react";
import globalContext from '../context/globalContext';
import ConfirmForm from "./ConfirmForm";

export default function ConfirmingData() {
  const { cart, setFinished } = useContext(globalContext);
  return(
    <section
      className="confirming-data-container"
    >
      <ConfirmForm />
      <div
        className="final-confirm"
      >
        <h3
          className="confirming-total-price"
        >
          Total: R$
          { ' ' }
          {
            cart.reduce((previous, product) => previous + ( product.price * product.quantity), 0).toFixed(2)
          }
        </h3>
        <button
          onClick={ () => setFinished(true) }
        >Finalizar Compra</button>
      </div>
    </section>
  );
}
