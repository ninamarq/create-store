import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BuyerData from '../components/BuyerData';
import ConfirmingData from '../components/ConfirmingData';

export default function FinishingShop() {
  const navigate = useNavigate();
  const [isConfirming, setConfirm] = useState(false);

  return (
    <div>
      {
        isConfirming ? <ConfirmingData /> : <BuyerData />
      }
      <button
        onClick={() => navigate('/cart')}
      >Voltar</button>
      <button
        onClick={ () => setConfirm(true) }
      >{ isConfirming ? "Finalizar Compra" : "Confirmar Compra" }</button>
    </div>
  )
}
