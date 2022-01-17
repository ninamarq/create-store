import React, { useContext, useEffect, useState } from 'react';
import globalContext from '../context/globalContext';
import { getCategories } from '../services/productsAPI';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  
  useEffect(async () => {
    const responseCat = await getCategories();
    setCategories(responseCat);
  }, []);

  const { selectCategory } = useContext(globalContext);

  return (
    <div
      className='categories'
    >
      <select
        onChange={ selectCategory }
      >
        <option>Categorias</option>
        {
          categories.map((element) => (
            <option
              category={ element }
              key={ element.id }
              value={ element.id }
            >
              { element.name }
            </option>
          ))
        }
      </select>
    </div>
  );
};
