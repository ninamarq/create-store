import React, { useContext } from 'react';
import globalContext from '../context/globalContext';
import '../style/ProductDetail.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';

export default function ProductDetail() {
  const { details, addToCart } = useContext(globalContext);
  const starSeller = details.seller.seller_reputation.level_id && details.seller.seller_reputation.level_id.split('')[0];

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
        <h4
          className='specification-list'
        >
          O que você precisa saber sobre este produto
        </h4>
        {
          details.attributes.map((att) => (
            <li
              className='specification-list'
            >{ att.name }: { att.value_name }</li>
          ))
        }
      </section>
      <section
        className='product-info-buy'
      > 
        <h2>Informações sobre o vendedor</h2>
        {
          details.seller.seller_reputation.level_id && (
            <section>
              <h4>Avaliação do vendedor</h4>
              <div
                className='star-reputation'
              >
                <p>
                  <FaStar />
                  { ' ' }
                  <b>{ starSeller }</b>
                  { ' ' }
                  Estrelas
                </p>
              </div>
            </section>
          )
        }
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
        {
          details.shipping.free_shipping && (
            <div
              className='free-shipping-details'
            >
              <h4>Frete Grátis</h4>
              <AiFillThunderbolt />
            </div>
        )
        }
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
