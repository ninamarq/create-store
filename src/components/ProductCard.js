import React, { useContext } from 'react';
import globalContext from '../context/globalContext';
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const { list } = props;
  const navigate = useNavigate();
  const { setDetail, addToCart } = useContext(globalContext);

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
              width="200px"
              />
            <section
              className='product-text'
              onClick={() => {
                setDetail(product);
                navigate(`products/${ product.id }`)
              }}
            >
              <h3>R$ { product.price.toFixed(2) }</h3>
              <p>{ product.title }</p>
              <h4
                className='free-shipping'
              >{
                product.shipping.free_shipping && ('Frete Grátis')  
              }</h4>
            </section>
            <button
              onClick={() => addToCart(product)}
            >Adicionar ao Carrinho</button>
          </div>
        ))
      }
    </div>
  );
}