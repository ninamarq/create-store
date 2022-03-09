import React, { useContext, useEffect, useState } from 'react';
import globalContext from '../context/globalContext';
import ProductCard from '../components/ProductCard';
import { getProductsByQuery } from '../services/productsAPI';
import notFound from '../images/notFound.svg';
import loading from '../images/loading.gif';
import '../style/Principal.css';

export default function Principal() {
  const { search, category,
    products, setProducts,
    finishShop, setFinished, clearCart,
    setData } = useContext(globalContext);
  const [isLoading, setLoading] = useState(true);

  useEffect(async () => {
    if (category.length === 0 && search.length === 0) {
      const initial_products = await getProductsByQuery("gamer");
      await setProducts(initial_products);
      setLoading(false);      
    }
    if (finishShop) {
      setFinished(false);
      setData({
        name: '',
        cpf: 0,
        email: '',
        tel: 0,
        cep: 0,
        street: '',
        neighborhood: '',
        comp: 0,
        number: 0,
        city: '',
        state: 'AC',
        payment: 'Boleto',
        numberCard: 0,
        validate: '',
        securityCode: 0,
      });
      clearCart();
      const initial_products = await getProductsByQuery("gamer");
      setProducts(initial_products);
    }
  }, []);

  const verifyProducts = (
    products.length && isLoading === 0 ?
      (
      <section
        className='no-products-found'
      >
        <h4>
          Nenhum produto foi encontrado!
        </h4>
        <img
          src={ notFound }
          alt='Produto não encontrado'
          width="40%"
        />
      </section>
      )
      : <ProductCard list={ products }/>
  );

  const checkingResults = (category.length === 0 || category === "Categorias");

  const renderCreateStore = (
    checkingResults ? verifyProducts
      : (
        <ProductCard list={ products }/>
      )
  );

  return (
    <div
      className='principal-container'
    >
      {
        isLoading ? (
          <img
            src={ loading }
            id="loading-gif"
            alt="Carregando dados"
          />
        ) : renderCreateStore
      }
    </div>
  );
}
