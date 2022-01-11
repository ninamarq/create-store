import React, { useContext } from "react";
import globalContext from '../context/globalContext';

export default function ConfirmingData() {
  const { buyerData, cart } = useContext(globalContext);
  return(
    <section>
      <h3>Confirme seus dados:</h3>
      <h4>Nome: { buyerData.name }</h4>
      <h4>CPF: { buyerData.cpf }</h4>
      <h4>Endereço: { buyerData.address }</h4>
      {
        buyerData.comp.length > 0 && (
          <h4>Complemento: { buyerData.comp }</h4>)
      }
      <h4>Número: { buyerData.number }</h4>
      <h4>Cidade: { buyerData.city }</h4>
      <h4>Estado: { buyerData.state }</h4>
      <h4>Método de Pagamento: { buyerData.payment }</h4>
      {
        cart.map((product) => (
          <section
              className="card"
            >
              <img
              width="100px"
                src={ product.thumbnail }
                alt={ product.title }
              />
              <h4>{ product.title }</h4>
              <h4>Qtde: { product.quantity }</h4>
              <h4>R${ product.price }</h4>
            </section>
        ))
      }
    </section>
  );
}