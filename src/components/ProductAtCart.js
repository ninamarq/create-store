import React, { useContext } from 'react';
import globalContext from '../context/globalContext';

export default function ProductCard(props) {
  const { list } = props;
  const { addToCart, removeFromCart, deleteFromCart } = useContext(globalContext);

  return (
    <div
      className='teste'
    >
      {
        list.length === 0 ? <h4>Nenhum produto foi adicionado!</h4>
        : list.map((product) => (
            <section
            className='card'
              key={ product.id }
            >
              <h4>{ product.title }</h4>
              <img
                src={ product.thumbnail }
                alt={ product.title }
                width="200px"
              />
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
