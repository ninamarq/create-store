import React from 'react';

export default function ProductCard(props) {
  const { list } = props;
  // const { increase, decrease, setIncrease, setDecrease } = props;
  console.log(list);
  return (
    <div>
      {
        list.length === 0 ? <h4>Nenhum produto foi adicionado!</h4>
        : list.map((product) => (
            <section
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
                  // onClick={ setIncrease(product) }
                  >-</button>
                <h4>{ product.quantity }</h4>
                <button
                  // onClick={ ({ target }) => target.quantity += 1 }
                >+</button>
              </div>
            </section>
        ))
      }
    </div>
  );
}
