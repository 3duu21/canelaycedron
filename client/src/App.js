import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Somos from './pages/somos';
import Parati from './pages/parati';
import Clientes from './pages/clientes';

function App() {
  return (
    <div className="App">
      <Header />
      <Somos />
      <Parati />
      <Clientes />
      <Footer />
    </div>
  );
}

export default App;