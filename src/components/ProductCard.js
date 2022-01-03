import React, { useContext } from 'react';
import globalContext from '../context/globalContext';
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const { list } = props;
  const navigate = useNavigate();
  const { setDetail } = useContext(globalContext);

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
              width="200px"
            />
            <p>R${ product.price.toFixed(2) }</p>
            <button
              onClick={() => {
                setDetail(product);
                navigate(`products/${ product.id }`)
              }}
            >
              Mais detalhes
            </button>
            <button>Adicionar ao Carrinho</button>
          </section>
        ))
      }
    </div>
  );
}