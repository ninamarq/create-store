import React, { useContext, useEffect } from 'react';
import globalContext from '../context/globalContext';
import ProductCard from '../components/ProductCard';
import { getProductsByQuery } from '../services/productsAPI';

export default function Principal() {
  const { search, category,
    products, setProducts,
    finishShop, setFinished, clearCart,
    setData, setCategory } = useContext(globalContext);

  useEffect(async () => {
    if (category.length === 0 && search.length === 0) {
      const initial_products = await getProductsByQuery("programação");
      setProducts(initial_products);
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
      const initial_products = await getProductsByQuery("programação");
      setProducts(initial_products);
    }
  }, []);

  const verifyProducts = (
    products.length === 0 ?
      (<h4>
        Nenhum produto foi encontrado!
      </h4>)
      : <ProductCard list={ products }/>
  );

  return (
    <div>
      {
        category.length === 0 ? verifyProducts
        : (
          <ProductCard list={ products }/>
        )
      }
    </div>
  );
}
