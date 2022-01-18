import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import globalContext from '../context/globalContext';
import '../style/ProductDetail.css';

export default function ProductDetail() {
  const navigate = useNavigate()
  const { details, addToCart } = useContext(globalContext);
  return(
    <div
      className='product-detail'
    >
      <section
        className='product-to-detail'
      >
        <h3>
          { details.title }
        </h3>
        <img
          src={ details.thumbnail }
          alt={ details.title }
          width="200px"
        />
      </section>
      <section
        className='product-localization'
      >
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
      <section
        className='product-specification'
      >
        <h4>Especificações técnicas</h4>
        <ul>
          {
            details.attributes.map((att) => (
              <li>{ att.name }: { att.value_name }</li>
            ))
          }
        </ul>
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
      </section>
      <button
        onClick={() => addToCart(details)}
      >Adicionar ao Carrinho</button>
      <button
        onClick={() => navigate('/')}
      >Voltar</button>
    </div>
  )
}
