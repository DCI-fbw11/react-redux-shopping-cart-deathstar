import React, { Component } from 'react';
import './App.css';
import Catalog from './components/Catalog';
import Checkout from './components/Checkout';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  render() {
    return (
      <div>
        <Catalog />
        <ShoppingCart />
        <Checkout />
      </div>
    );
  }
}

export default App;
