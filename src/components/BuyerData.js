import React, { useContext } from "react";
import globalContext from '../context/globalContext';
import ProductForms from "./ProductForms";
import BuyerDataForm from "./BuyerDataForm";
import swal from 'sweetalert';
import { FaCcMastercard,
  FaCcVisa, FaCreditCard, FaBarcode } from 'react-icons/fa';

export default function BuyerData() {
  const { buyerData, setData,
    setConfirm } = useContext(globalContext);

// Verifica se o formulário está preenchido
  function dataValidation() {
    const userKeys = Object.keys(buyerData);
    const check = buyerData.payment === "Boleto" ? (
      userKeys.some((key) => {
        if(key !== "numberCard" && key !== "validate"
          && key !== "securityCode" && key !== "comp" ) {
          return (buyerData[key].length === 0 || buyerData[key] === 0);
        }
      })
    ) : (
      userKeys.some((key) => (key !== "comp") && (
        buyerData[key].length === 0 || buyerData[key] === 0
        )
      )
    )
    check ? (
      swal('Preencha todos os campos!', 'Ei, dê uma olhada nos seus dados, está tudo preenchido?', 'error')
    ) : (
      setConfirm(true)
    )
  }

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
    <div
      className="form-buyer"
    >
      <ProductForms />
      <BuyerDataForm />
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
      <button
        type="button"
        onClick={ () => dataValidation() }
      >Confirmar Compra</button>
    </div>
  );
}