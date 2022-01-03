import React, { useContext } from 'react';
import globalContext from '../context/globalContext';

export default function ProductDetail() {
  const { details } = useContext(globalContext);
  console.log(details);
  return(
    <div>
      <h3>
        { details.title } - R${ details.price }
      </h3>
      <img
        src={ details.thumbnail }
        alt={ details.title }
        width="200px"
      />
      <section>
        <table>
          <tr>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
          <tr>
            <td>{ details.address.city_name }</td>
            <td>{ details.address.state_name }</td>
          </tr>
        </table>        
      </section>
      <section>
        <h4>Especificações técnicas</h4>
        <ul>
          {
            details.attributes.map((att) => (
              <li>{ att.name }: { att.value_name }</li>
            ))
          }
        </ul>
      </section>
    </div>
  )
}
