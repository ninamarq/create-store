import React, { useContext } from "react";
import globalContext from '../context/globalContext';
import { useNavigate } from "react-router-dom";

export default function FinishingShop() {
  const navigate = useNavigate()
  const { cart } = useContext(globalContext);
  const brStates =  [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
    ];
  return (
    <div>
      <section>
        <h3>Revise seus Produtos</h3>
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
        <h3>Total:
          {
            cart.reduce((previous, product) => previous + ( product.price * product.quantity), 0).toFixed(2)
          }
        </h3>
      </section>
      <section>
        <h3>Informações do Comprador</h3>
        <form>
          <input
            type="text"
            placeholder="Nome Completo"
          />
          <input
            type="number"
            placeholder="CPF"
          />
          <input
            type="email"
            placeholder="Email"
          />
          <input
            type="number"
            placeholder="Telefone"
          />
          <input
            type="number"
            placeholder="CEP"
          />
          <input
            type="text"
            placeholder="Endereço"
          />
          <input
            type="text"
            placeholder="Complemento"
          />
          <input
            type="number"
            placeholder="Número"
          />
          <input
            type="text"
            placeholder="Cidade"
          />
          <select>
            {
              brStates.map((state) => (
                <option
                  value={ state }
                >{ state }</option>
              ))
            }
          </select>
        </form>
      </section>
      <section>
        <h3>Método de Pagamento</h3>
        <label
          htmlFor="boleto"
        >
          Boleto
          <input
            type="radio"
            name="payment-mode"
            id="boleto"
          />
        </label>
        <p>Cartão de Crédito</p>
        <label
          htmlFor="visa"
        >
          Visa
          <input
            type="radio"
            name="payment-mode"
            id="visa"
          />
        </label><label
          htmlFor="mastercard"
        >
          MasterCard
          <input
            type="radio"
            name="payment-mode"
            id="mastercard"
          />
        </label><label
          htmlFor="elo"
        >
          Elo
          <input
            type="radio"
            name="payment-mode"
            id="elo"
          />
        </label>
      </section>
      <button
        onClick={() => navigate('/cart')}
      >Voltar</button>
      <button
        onClick={ () => window.alert('Compra Finalizada!') }
      >Finalizar Compra</button>
    </div>
  )
}
