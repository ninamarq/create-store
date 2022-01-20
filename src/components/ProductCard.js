import React, { useContext } from 'react';
import globalContext from '../context/globalContext';
import { useNavigate } from "react-router-dom";
import { AiFillThunderbolt } from 'react-icons/ai';
import { toast } from 'react-toastify';

export default function ProductCard(props) {
  const { list } = props;
  const navigate = useNavigate();
  const { setDetail, addToCart, limitCarac } = useContext(globalContext);

  function alertAddToCart() {
    toast.success("Adicionado ao Carrinho!", {
      position: toast.POSITION.TOP_RIGHT,
      pauseOnHover: false,
      closeOnClick: true,
    });  
  }

  return (
    <div
      className='products-list'
    >
      {
        list.length === 0 ? <h4>Nenhum produto foi encontrado</h4>
        : list.map((product) => (
          <div
            className='product-card'
            key={ product.id }
          >
            <img
              onClick={() => {
                setDetail(product);
                navigate(`products/${ product.id }`)
              }}
              className='product-img'
              src={ product.thumbnail }
              alt={ product.title }
              />
            <section
              className='product-text'
              onClick={() => {
                setDetail(product);
                navigate(`products/${ product.id }`)
              }}
            >
              <div
                className='product-prices'
              >
                <h3>R$ { product.price.toFixed(2) }</h3>
                {
                  product.original_price && (
                    <p
                      className='discount-price'
                    >
                      R$ { product.original_price.toFixed(2) }
                    </p>
                  )
                }
                <p
                  className='price-installment'
                >
                  em até <b>12x</b> de <b>R$ { (product.price/12).toFixed(2) }</b>
                </p>
              </div>
              <p
                className='product-card-title'
              >{ limitCarac(product.title) }</p>
              {
                product.shipping.free_shipping && (
                  <div
                    className='free-shipping'
                  >
                    <h4>Frete Grátis</h4>
                    <AiFillThunderbolt />
                  </div>
              )
              }
            </section>
            <button
              onClick={ () => {
                alertAddToCart()
                addToCart(product) 
              }}
            >Adicionar ao Carrinho</button>
          </div>
        ))
      }
    </div>
  );
}