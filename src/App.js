import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Header from './components/Header';
import Provider from './context/globalProvider';
import Principal from './pages/Principal';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <Categories />
        <Routes>
          <Route path="/" element={ <Principal /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
