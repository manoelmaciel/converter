import React, { Component } from 'react';
import './Converter.css';

class Converter extends Component {

  constructor (props) {
    super(props);

    this.state = {
      currencyA_value: "", 
      currencyB_value: 0
    }

    this.toConvert = this.toConvert.bind(this); // Aqui não entendi porra nenhuma ... Mas tá valendo!

  }

  toConvert() {
    // console.log(this.state);
    let from_to = `${this.props.currencyA}_${this.props.currencyB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=y&apiKey=9159dce960394be496f8`;
    // console.log(url);

    fetch(url)
    
    .then(res => {
      // console.log(res)
      return res.json()
      // console.log(currencyB_value)

    })

    .then(json => {
      console.log(json)
      let quotation = json[from_to].val;
      // console.log(currencyB_value)
      let currencyB_value = (parseFloat(this.state.currencyA_value) * quotation).toFixed(2);
      // console.log(currencyB_value)
      this.setState({currencyB_value});
    })

  }

  render() {
    return (
      <div className="Converter">
        <header>
          <h1>Converter</h1>
        </header>
        <h2>From {this.props.currencyA} to {this.props.currencyB}</h2>
        <input type="text" onChange={(event) => {this.setState({currencyA_value:event.target.value})}}></input>
        <input type="button" onClick={this.toConvert} value="To convert"></input>
        <h2>{this.state.currencyB_value}</h2>
      </div>
    );
  }
}

export default Converter;
