import React, { useContext } from "react";
import globalContext from '../context/globalContext';
import { getAdressByZipCode } from '../services/productsAPI';
import swal from 'sweetalert';

export default function BuyerData() {
  const { buyerData, setData, cart,
    setConfirm, limitCarac } = useContext(globalContext);
  const brStates =  [
    'Estado',
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

    async function handleCEP({ target }) {
      if (target.value.length === 8) {
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
    <section
      className="products-form"
    >
      <h3>Revise seus Produtos</h3>
        {
          cart.map((product) => (
            <section
              key={ product.title }
              className="product-card-check"
            >
              <img
              width="100px"
                src={ product.thumbnail }
                alt={ product.title }
              />
              <h4
                className="product-card-check-title"
              >
                { limitCarac(product.title) }
              </h4>
              <h4
                className="product-card-check-other"
              >
                Qtde: { product.quantity }
              </h4>
              <h4
                className="product-card-check-other"
              >
                R${ product.price }
              </h4>
            </section>
          ))
        }
      <h3>Total:
        {
          cart.reduce((previous, product) => previous + ( product.price * product.quantity), 0).toFixed(2)
        }
      </h3>
    </section>
    <section
      className="buyer-data-form"
    >
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
          maxLength="11"
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
          {
            brStates.map((state) => (
              <option
                value={state}
              >{state}</option>
            ))
          }
        </select>
      </form>
    </section>
    <section
      className="payment-form"
    >
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
    {
      checkingPayment()
    }
    </section>
    <button
      type="button"
      onClick={ () => dataValidation() }
    >Confirmar Compra</button>
    </div>
  );
}