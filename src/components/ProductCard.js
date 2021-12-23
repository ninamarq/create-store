import React from "react";

export default function ProductCard(props) {
  const { list } = props;
  console.log(list);
  return (
    <div>
      {
        list.length === 0 ? <h4>Nenhum produto foi encontrado</h4>
        : list.map((product) => (
          <section
            key={ product.id }
          >
            <h4>{ product.title }</h4>
            <img
              src={ product.thumbnail }
              alt={ product.title }
            />
            <p>R${ product.price }</p>
          </section>
        ))
      }
    </div>
  );
}