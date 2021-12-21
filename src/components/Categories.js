import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/productsAPI';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  
  useEffect(async () => {
    const responseCat = await getCategories();
    setCategories(responseCat);
  }, []);

  return (
    <aside>
      {
        categories.map((element) => (
          <label
            key={ element.id }
            htmlFor={ element.id }
          >
            { element.name }
            <input
              id={ element.id }
              type="radio"
              name="category"
            />
          </label>
        ))
      }
    </aside>
  );
};
