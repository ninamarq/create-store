import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import Provider from './context/globalProvider';

function App() {
  return (
    <Provider>
      <Header />
      <Categories />
    </Provider>
  );
}

export default App;
