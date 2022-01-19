import React, { useContext } from 'react';
import globalContext from '../context/globalContext';
import { AiFillThunderbolt } from 'react-icons/ai';

export default function ProductCard(props) {
  const { list } = props;
  const { addToCart, removeFromCart, deleteFromCart } = useContext(globalContext);

  function limitCarac(title) {
    const limit = 60;
    if(title.length > limit) {
      return `${ title.slice(0, limit) }...`;
    }
    return title;
  }

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
              <section
                className='product-cart-text'
              >
                <h4
                  className='product-at-cart-title'
                >
                  { limitCarac(product.title) }
                </h4>
                {
                  product.shipping.free_shipping && (
                    <div
                      className='free-shipping-cart'
                    >
                      <h4>Frete Grátis</h4>
                      <AiFillThunderbolt />
                    </div>
                )
                }
              </section>
              <div
                className='product-cart-buttons'
              >
                <button
                  onClick={ () => removeFromCart(product) }
                  >-</button>
                <h4>{ product.quantity }</h4>
                <button
                  onClick={ () => addToCart(product) }
                >+</button>
              </div>
                <button
                  className='remove-cart-button'
                  onClick={ () => deleteFromCart(product) }
                >Remover</button>
              <h3
                className='product-at-cart-price'
              >
                R${ (product.price) * (product.quantity).toFixed(2) }
              </h3>
            </section>
        ))
      }
    </div>
  );
}
