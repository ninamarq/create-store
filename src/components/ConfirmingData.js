import React, { useContext } from "react";
import globalContext from '../context/globalContext';

export default function ConfirmingData() {
  const { buyerData, cart, setFinished } = useContext(globalContext);
  const checkingPayment = (buyerData.payment !== "Boleto" && buyerData.payment !== "");
  return(
    <section>
      <h3>Confirme seus dados</h3>
      <h4>Nome: { buyerData.name }</h4>
      <h4>CPF: { buyerData.cpf }</h4>
      <h4>Rua: { buyerData.street }</h4>
      <h4>Bairro: { buyerData.neighborhood }</h4>
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
      {
        checkingPayment && (
          <>
            <h3>Dados do Cartão</h3>
            <h4>Número do Cartao: { buyerData.numberCard }</h4>
            <h4>Validade: { buyerData.validate }</h4>
          </>
        )
      }
      <h3>
        Total: R$
        { ' ' }
        {
          cart.reduce((previous, product) => previous + ( product.price * product.quantity), 0).toFixed(2)
        }
      </h3>
      <button
        onClick={ () => setFinished(true) }
      >Finalizar Compra</button>
    </section>
  );
}