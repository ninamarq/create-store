import React, { useContext } from 'react';
import globalContext from '../context/globalContext';
import { useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const navigate = useNavigate()
  const { details, addToCart } = useContext(globalContext);
  return(
    <div>
      <section>
        <h3>
          { details.title }
        </h3>
        <img
          src={ details.thumbnail }
          alt={ details.title }
          width="200px"
        />
        <section>
          <table>
            <tr>
              <th>Cidade</th>
              <th>Estado</th>
            </tr>
            <tr>
              <td>{ details.address.city_name }</td>
              <td>{ details.address.state_name }</td>
            </tr>
          </table>        
        </section>
        <section>
          <h4>Especificações técnicas</h4>
          <ul>
            {
              details.attributes.map((att) => (
                <li>{ att.name }: { att.value_name }</li>
              ))
            }
          </ul>
        </section>
        <h3>R${ details.price }</h3>
        <button
          onClick={() => addToCart(details)}
        >Adicionar ao Carrinho</button>
      </section>
      <button
        onClick={() => navigate('/')}
      >Voltar</button>
    </div>
  )
}
