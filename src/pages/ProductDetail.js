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
        <h2>
          { details.title }
        </h2>
        <h3>O que você precisa saber sobre este produto</h3>
        {
          details.attributes.map((att) => (
            <p><b>{ att.name }:</b> { att.value_name }</p>
          ))
        }
      </section>
      <section
        className='product-info-buy'
      > 
        <h2>Informações sobre o vendedor</h2>
        <h4>Localização</h4>
        <div
          className='product-localization'
        >
          <FaMapMarkerAlt />
          <p> { details.address.city_name }, { details.address.state_name }</p>
        </div>
        <div
          className='product-prices'
        >
          <h3>R$ { details.price.toFixed(2) }</h3>
          {
            details.original_price && (
              <p
                className='discount-price'
              >
                R$ { details.original_price.toFixed(2) }
              </p>
            )
          }
          <p
            className='price-installment'
          >
            em até <b>12x</b> de <b>R$ { (details.price/12).toFixed(2) }</b>
          </p>
        </div>
        <div
          className='free-shipping-details'
        >
          <h3>Frete Grátis</h3>
          <AiFillThunderbolt />
        </div>
        {
          details.available_quantity > 0 ? (
            <p
              className='product-available'
            >
              <b>Estoque disponível!</b> ({ details.available_quantity } disponíveis)
            </p>
          ) : (
            <h4>Produto Indisponível</h4>
          )
        }
        <button
          onClick={() => addToCart(details)}
        >Adicionar ao Carrinho</button>
      </section>
    </div>
  )
}
