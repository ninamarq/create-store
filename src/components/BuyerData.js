import { check } from "prettier";
import React, { useContext, useState } from "react";
import globalContext from '../context/globalContext';
import { getAdressByZipCode } from '../services/productsAPI';

export default function BuyerData() {
  const { buyerData, setData, cart, setConfirm } = useContext(globalContext);
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


  function dataValidation() {
    const keys = Object.keys(buyerData);
    let isDisabled = true;
    keys.some((key) => {
      if(buyerData[key] === '' || buyerData[key] === 0) {
        isDisabled = false;
      }
    });
    return isDisabled;
  }

    function handleChange({ target }) {
      setData({...buyerData,
        [target.name]: target.value});
    }

    async function handleCEP({ target }) {
      if (target.value.length === 8) {
        console.log("check")
        const getAdress = await getAdressByZipCode(target.value);
        return setData({...buyerData,
          [target.name]: target.value,
          street: getAdress.street,
          neighborhood: getAdress.neighborhood,
          city: getAdress.city,
          state: getAdress.state,
        });
      }
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
          onChange={handleCEP} />
        <input
          type="text"
          name="street"
          placeholder="Rua"
          value={ buyerData.street }
          onChange={handleChange} />
          <input

          type="text"
          name="neighborhood"
          placeholder="Bairro"
          value={ buyerData.neighborhood }
          onChange={handleChange} />
        <input
          type="text"
          placeholder="Complemento *"
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
          value={ buyerData.city }
          onChange={handleChange} />
        <select
          name="state"
          onChange={handleChange}
          value={ buyerData.state }
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
      </section>
      {
        buyerData.payment !== "Boleto" && (
          <section>
            <input
              type="text"
              placeholder="Número do Cartão"
              name="numberCard"
              onChange={handleChange}
            />
            <input
              type="date"
              placeholder="Validade Cartão"
              name="validate"
              onChange={handleChange}
            />
            <input
              type="number"
              name="securityCode"
              onChange={handleChange}
              placeholder="Código de Segurança"
            />
          </section>
        )
      }
      <button
        onClick={ () => setConfirm(true) }
        disabled={ dataValidation }
      >Confirmar Compra</button>
      </>
  );
}