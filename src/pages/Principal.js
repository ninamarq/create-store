import React, { useContext, useEffect } from 'react';
import globalContext from '../context/globalContext';
import ProductCard from '../components/ProductCard';
import { getProductsByQuery } from '../services/productsAPI';

export default function Principal() {
  const { search, category,
    products, setProducts } = useContext(globalContext);

  useEffect(async () => {
    if (category.length === 0 && search.length === 0) {
      const initial_products = await getProductsByQuery("gamer");
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
