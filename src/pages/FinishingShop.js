import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import globalContext from '../context/globalContext';
import BuyerData from '../components/BuyerData';
import ConfirmingData from '../components/ConfirmingData';
import swal from 'sweetalert';
import '../style/Payment.css';

export default function FinishingShop() {
  const navigate = useNavigate();
  const { confirmShop,
    finishShop,
    setConfirm,
  } = useContext(globalContext);
  const validateShopStatus = (confirmShop && finishShop);

  function thanksForBuying() {
    swal('Compra efetuada com sucesso!', 'Muito obrigada pela preferência.', 'success');
    navigate('/');
    setConfirm(false);
  }

  return (
    <div
      className="shopping-form"
    >
      {
        confirmShop ? <ConfirmingData /> : <BuyerData />
      }
      {
        validateShopStatus && thanksForBuying()
      }
    </div>
  )
}
