import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Header from './components/Header';
import Provider from './context/globalProvider';
import Principal from './pages/Principal';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <Categories />
        <Routes>
          <Route path="/" element={ <Principal /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/products/:id" element={ <ProductDetail /> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
