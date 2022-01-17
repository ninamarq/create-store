import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import globalContext from '../context/globalContext';
import BuyerData from '../components/BuyerData';
import ConfirmingData from '../components/ConfirmingData';
import swal from 'sweetalert';

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
    <div>
      {
        confirmShop ? <ConfirmingData /> : <BuyerData />
      }
      {
        validateShopStatus && thanksForBuying()
      }
      <button
        onClick={() => navigate('/cart')}
      >Voltar</button>
    </div>
  )
}
