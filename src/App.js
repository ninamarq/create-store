import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Provider from './context/globalProvider';
import Principal from './pages/Principal';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import FinishingShop from './pages/FinishingShop';
import './style/Global.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <ToastContainer autoClose={ 3000 } />
        <Routes>
          <Route path="/" element={ <Principal /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/products/:id" element={ <ProductDetail /> }/>
          <Route path="/finish-shop/payment" element={ <FinishingShop /> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
