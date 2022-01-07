import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import globalContext from '../context/globalContext';
import RedirectToCart from '../components/RedirectToCart';

export default function ProductDetail() {
  const navigate = useNavigate()
  const { details, addToCart } = useContext(globalContext);
  return(
    <div>
      <RedirectToCart />
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
        <table>
          <tr>
            <th>Estoque</th>
            <th>Já vendidos</th>
          </tr>
          <tr>
            <td>{ details.available_quantity }</td>
            <td>{ details.sold_quantity }</td>
          </tr>
          </table>
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
