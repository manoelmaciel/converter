import React, { Component } from 'react';
import './App.css';
import Converter from './components/Converter.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Converter currencyA="USD" currencyB="BRL" />
      </div>
    );
  }
}

export default App;