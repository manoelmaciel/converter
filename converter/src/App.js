import React, { Component } from 'react';
import './App.css';
import Converter from './components/Converter.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Currency Converter</h1>
        </header>
        <section>
          <div className="linha">
            <Converter currencyA="USD" currencyB="BRL" />
            <Converter currencyA="BRL" currencyB="USD" />
          </div>
          <div className="linha">
            <Converter currencyA="CAD" currencyB="BRL" />
            <Converter currencyA="BRL" currencyB="CAD" />
          </div>
          <div className="linha">
            <Converter currencyA="EUR" currencyB="BRL" />
            <Converter currencyA="BRL" currencyB="EUR" />
          </div>
        </section>
      </div>
    );
  }
}

export default App;