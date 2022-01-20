import React, { useContext } from "react";
import { FaCcMastercard,
  FaCcVisa, FaCreditCard, FaBarcode } from 'react-icons/fa';
import globalContext from "../context/globalContext";


export default function PaymentForm() {
  const { buyerData, setData } = useContext(globalContext);

  function handleChange({ target }) {
    setData({...buyerData,
      [target.name]: target.value});
  }

  function checkingPayment() {
    if(buyerData.payment !== "Boleto" && buyerData.payment !== '') {
      return (
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
      </section>)
    }
  }
  
  return(
    <section
        className="payment-form"
      >
        <h3>Método de Pagamento</h3>
        <label
          htmlFor="boleto"
        >
          <FaBarcode />
          <input
            type="radio"
            name="payment"
            id="boleto"
            value="Boleto"
            onChange={handleChange} />
        </label>
        <p>Cartão de Crédito</p>
        <div
          className="credit-cards"
        >
          <label
            htmlFor="visa"
          >
            <FaCcVisa />
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
            <FaCcMastercard />
            <input
              type="radio"
              name="payment"
              id="mastercard"
              value="Mastercard"
              onChange={handleChange} />
          </label><label
            htmlFor="elo"
          >
            <FaCreditCard />
            <input
              type="radio"
              name="payment"
              value="Elo"
              id="elo"
              onChange={handleChange} />
          </label>
          {
            checkingPayment()
          }
        </div>
      </section>
  )
}