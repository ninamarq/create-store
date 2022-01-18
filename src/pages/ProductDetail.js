import React, { useContext } from 'react';
import globalContext from '../context/globalContext';
import '../style/ProductDetail.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillThunderbolt } from 'react-icons/ai';

export default function ProductDetail() {
  const { details, addToCart } = useContext(globalContext);
  return(
    <div
      className='product-detail'
    >
      <section
        className='product-to-detail'
      >
        <img
          src={ details.thumbnail }
          alt={ details.title }
          width="300px"
        />
      </section>
      <section
        className='product-specification'
      >
        <h3>
          { details.title }
        </h3>
        <h4>O que você precisa saber sobre este produto</h4>
        <ul>
          {
            details.attributes.map((att) => (
              <li>{ att.name }: { att.value_name }</li>
            ))
          }
        </ul>
        <table
          style={ { textAlign: "center" } }
        >
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
      <section
        className='product-info-buy'
      > 
        <h3>Informações sobre o vendedor</h3>
        <h4>Localização</h4>
        <div
          className='product-localization'
        >
          <FaMapMarkerAlt />
          <p> { details.address.city_name }, { details.address.state_name }</p>
        </div>
        <h2>R$ { details.price.toFixed(2) }</h2>
        <div
          className='free-shipping-details'
        >
          <h4>Frete Grátis</h4>
          <AiFillThunderbolt />
        </div>
        <button
          onClick={() => addToCart(details)}
        >Adicionar ao Carrinho</button>
      </section>
    </div>
  )
}
