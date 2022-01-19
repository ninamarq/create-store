import React, { useContext } from 'react';
import globalContext from '../context/globalContext';
import { AiFillThunderbolt } from 'react-icons/ai';

export default function ProductCard(props) {
  const { list } = props;
  const { addToCart, removeFromCart, deleteFromCart } = useContext(globalContext);

  return (
    <div
      className='product-at-cart-list'
    >
      {
        list.length === 0 ? <h4>Nenhum produto foi adicionado!</h4>
        : list.map((product) => (
            <section
              className='product-at-cart'
              key={ product.id }
            >
              <img
                src={ product.thumbnail }
                alt={ product.title }
                width="200px"
                />
              <h4>{ product.title }</h4>
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
              <p>R${ product.price.toFixed(2) }</p>
              <div>
                <button
                  onClick={ () => removeFromCart(product) }
                  >-</button>
                <h4>{ product.quantity }</h4>
                <button
                  onClick={ () => addToCart(product) }
                >+</button>
                <button
                  onClick={ () => deleteFromCart(product) }
                >X</button>
              </div>
            </section>
        ))
      }
    </div>
  );
}
