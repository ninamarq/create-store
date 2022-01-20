# Projeto createStore() - Marina

Site / App de compras :shopping: para trabalhar conhecimentos de React Hooks, utilizando API do Mercado Livre.


## Documentação da API do Mercado Livre
Para realizar buscas de produtos para renderização, foi consultado os seguintes endpoints:

- Para listar as categorias disponíveis:
  - Tipo da requisição: `GET`
  - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
- Para buscar por itens por termo:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
- Para buscar itens por categoria:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
- Para buscar itens de uma categoria por termo:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY

Exemplo de como a requisição de categorias é recebida:

```json
[
  {
      "id": "MLB5672",
      "name": "Acessórios para Veículos"
  },
  {
      "id": "MLB271599",
      "name": "Agro"
  },
  {
      "id": "MLB1403",
      "name": "Alimentos e Bebidas"
  }
]
```

## API da pagar.me Zip Code
Para checar e receber os dados de seu endereço através do CEP inserido, foi utilizado o seguinte endpoint.

- Para listar o endereço disponível:
  - Tipo da requisição: `GET`
  - Parâmetro: $CEP (este parâmetro é substituído pelo valor do input do CEP)
Endpoint: https://api.pagar.me/1/zipcodes/$CEP

Exemplo de como a requisição de categorias é recebida, como exemplo foi utilizado o CEP da Trybe:

```json
{
  "zipcode": "30180910",
  "street": "Rua dos Guajajaras 40 - Edifício Mirafiori",
  "neighborhood": "Centro",
  "city": "Belo Horizonte",
  "state": "MG"
}
```

## Bibliotecas

### React Toastify
Para obter notificação ao adicionar carrinho, foi utilizado a seguinte biblioteca:
 - Endereço: https://fkhadra.github.io/react-toastify/introduction

  Instalação com npm:

```
npm install --save react-toastify
```

Exemplo de aplicação, retirada da documentação.

```
  import React from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';ReactToastify.min.css';

  function App(){
    const notify = () => toast("Wow so easy !");

    return (
      <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>
    );
  }
```

### React Icons
Para adicionar ícones, foi utilizado a biblioteca do React, React Icons.

Instalação:

```
npm install react-icons --save
```

E acessando o endereço abaixo, é possível procurar os ícones de cada seção.
https://react-icons.github.io/react-icons

Exemplo de utilização.
```

import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
```
