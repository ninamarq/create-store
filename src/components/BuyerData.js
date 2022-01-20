import React, { useContext } from "react";
import globalContext from '../context/globalContext';
import ProductForms from "./ProductForms";
import BuyerDataForm from "./BuyerDataForm";
import swal from 'sweetalert';
import PaymentForm from "./PaymentForm";

export default function BuyerData() {
  const { buyerData,
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

  return(
    <div
      className="form-buyer"
    >
      <ProductForms />
      <BuyerDataForm />
      <PaymentForm />
      <button
        type="button"
        onClick={ () => dataValidation() }
      >Confirmar Compra</button>
    </div>
  );
}