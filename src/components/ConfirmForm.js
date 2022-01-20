import React, { useContext } from "react";
import globalContext from "../context/globalContext";
import ProductsConfirming from "./ProductsConfirming";

export default function ConfirmForm() {
  const { buyerData } = useContext(globalContext);
  const checkingPayment = (buyerData.payment !== "Boleto" && buyerData.payment !== "");
  
  return(
    <div
        className="confirming-data-form"
      >
        <h3
          className="confirming-data-title"
        >
          Confirme seus dados
        </h3>
        <section
          className="data-confirming"
        >
          <p><b>Nome:</b> { buyerData.name }</p>
          <p><b>CPF:</b> { buyerData.cpf }</p>
          <p><b>Rua:</b> { buyerData.street }</p>
          <p><b>Bairro:</b> { buyerData.neighborhood }</p>
          {
            buyerData.comp.length > 0 && (
              <p><b>Complemento:</b> { buyerData.comp }</p>)
          }
          <p><b>Número:</b> { buyerData.number }</p>
          <p><b>Cidade:</b> { buyerData.city }</p>
          <p><b>Estado:</b> { buyerData.state }</p>
          <p><b>Método de Pagamento:</b> { buyerData.payment }</p>
          {
            checkingPayment && (
              <div
                className="card-payment-confirm"
              >
                <h3
                  className="confirming-data-title"
                >
                  Dados do Cartão
                </h3>
                <section
                  className="card-confirming-data"
                >
                  <p><b>Número do Cartao:</b> { buyerData.numberCard }</p>
                  <p><b>Validade:</b> { buyerData.validate }</p>
                </section>
              </div>
            )
          }
        </section>
        <ProductsConfirming />
      </div>
  );
}
