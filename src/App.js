import './App.css';
import Header from './components/Header';
import Provider from './context/globalProvider';

function App() {
  return (
    <Provider>
      <Header />
    </Provider>
  );
}

export default App;
