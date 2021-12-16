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
          <section
            key={ element.id }
          >
            { element.name }
          </section>
        ))
      }
    </aside>
  );
};
