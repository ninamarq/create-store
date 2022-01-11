import React, { useContext } from "react";
import globalContext from '../context/globalContext';

export default function BuyerData() {
  const { buyerData, setData, cart } = useContext(globalContext);
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

    function handleChange({ target }) {
      setData({...buyerData,
        [target.name]: target.value});
    }

  return(
    <>
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
          name="name"
          onChange={handleChange} />
        <input
          type="number"
          placeholder="CPF"
          name="cpf"
          onChange={handleChange} />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange} />
        <input
          type="number"
          name="tel"
          placeholder="Telefone"
          onChange={handleChange} />
        <input
          type="number"
          placeholder="CEP"
          name="cep"
          onChange={handleChange} />
        <input
          type="text"
          name="address"
          placeholder="Endereço"
          onChange={handleChange} />
        <input
          type="text"
          placeholder="Complemento"
          name="comp"
          onChange={handleChange} />
        <input
          type="number"
          placeholder="Número"
          name="number"
          onChange={handleChange} />
        <input
          type="text"
          placeholder="Cidade"
          name="city"
          onChange={handleChange} />
        <select
          name="state"
          onChange={handleChange}
        >
          {brStates.map((state) => (
            <option
              value={state}
            >{state}</option>
          ))}
        </select>
      </form>
    </section><section>
        <h3>Método de Pagamento</h3>
        <label
          htmlFor="boleto"
        >
          Boleto
          <input
            type="radio"
            name="payment"
            id="boleto"
            value="Boleto"
            onChange={handleChange} />
        </label>
        <p>Cartão de Crédito</p>
        <label
          htmlFor="visa"
        >
          Visa
          <input
            type="radio"
            name="payment"
            id="visa"
            value="Visa"
            onChange={handleChange} />
        </label>
        <label
          htmlFor="mastercard"
        >
          MasterCard
          <input
            type="radio"
            name="payment"
            id="mastercard"
            value="Mastercard"
            onChange={handleChange} />
        </label><label
          htmlFor="elo"
        >
          Elo
          <input
            type="radio"
            name="payment"
            value="Elo"
            id="elo"
            onChange={handleChange} />
        </label>
      </section></>
  );
}