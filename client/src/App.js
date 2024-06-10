import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Somos from './pages/somos';
import Parati from './pages/parati';

function App() {
  return (
    <div className="App">
      <Header />
      <Somos />
      <Parati />
      <Footer />
    </div>
  );
}

export default App;