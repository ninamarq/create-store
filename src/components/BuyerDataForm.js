import React, { useContext } from "react";
import globalContext from "../context/globalContext";
import { getAdressByZipCode } from '../services/productsAPI';

export default function BuyerDataForm() {
  const { buyerData, setData } = useContext(globalContext);
  
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

  function handleChange({ target }) {
    setData({...buyerData,
      [target.name]: target.value});
  }
  
  return(
    <section
        className="buyer-data-form"
      >
        <h2>Informações do Comprador</h2>
        <form>
          <input
            type="text"
            placeholder="Nome Completo"
            name="name"
            onChange={handleChange} />
          <input
            type="text"
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
            type="text"
            name="tel"
            placeholder="Telefone"
            onChange={handleChange} />
          <input
            type="text"
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
            type="text"
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
  );
}
