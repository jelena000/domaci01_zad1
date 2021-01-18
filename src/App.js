import './App.css';
import Currency from './components/Currency';
import React, { Component } from 'react'
const options = [
  {
    label: "Euro",
    value: "Euro",
  },
  {
    label: "Dinar",
    value: "Dinar",
  },
  {
    label: "Dolar",
    value: "Dolar",
  },
  {
    label: "Funta",
    value: "Funta",
  },
];
export default class App extends Component {
  state = {
    fromValue: "Euro",
    toValue: "Euro",
    amoutValue: 0,
    resValue: null
  }

  changeValueFrom = (value) => {
    let fromValue = value;
    this.setState({ fromValue });
  }

  changeValueTo = (value) => {
    let toValue = value;
    this.setState({ toValue });
  }

  changeValueAmount = (e) => {
    let amountValue = e.target.value;
    this.setState({ amountValue });
  }

  addReusult = (e) => {
    e.preventDefault();
    let {fromValue, toValue, amountValue} = this.state;

    let res = 1;
    if (fromValue === "Euro") {
      if (toValue === "Dinar") res = amountValue * 117.611;
      else if (toValue === "Dolar") res = amountValue * 1.21670;
      else if (toValue === "Funta") res = amountValue * 0.899591;
      else res = amountValue;
    } else if (fromValue === "Dinar") {
      if (toValue === "Euro") res = amountValue * 0.00850287;
      else if (toValue === "Dolar") res = amountValue * 0.0103449;
      else if (toValue === "Funta") res = amountValue * 0.00764896;
      else res = amountValue;
    } else if (fromValue === "Dolar") {
      if (toValue === "Euro") res = amountValue * 0.821959;
      else if (toValue === "Dinar") res = amountValue * 96.6494;
      else if (toValue === "Funta") res = amountValue * 0.739287;
      else res = amountValue;
    } else if (fromValue === "Funta") {
      if (toValue === "Euro") res = amountValue * 1.11176;
      else if (toValue === "Dinar") res = amountValue * 130.764;
      else if (toValue === "Dolar") res = amountValue * 1.35274;
      else res = amountValue;
    }
    this.setState({ resValue: res });
  }

  

  render() {
    return (
      <div className="App">
        <label htmlFor="amount">Amount: </label><br />
        <input type="number" id="amount" min="1" onChange={this.changeValueAmount} style={{ borderRadius: ".3em", width: "9em", height: "2em", marginTop: "10px" }}></input><br />
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "30px", paddingBottom: "30px" }}>
          <h3 style={{ marginTop: 0, marginRight: "20px" }}>From</h3>
          <Currency options={options} changeValue={this.changeValueFrom} style={{ display: "inline" }}></Currency>
          <h3 style={{ marginTop: 0, marginLeft: "20px", marginRight: "20px" }}>To</h3>
          <Currency options={options} changeValue={this.changeValueTo} style={{ display: "inline" }}></Currency>
          <input type="submit" onClick={this.addReusult} style={{ marginLeft: "10px", backgroundColor: "black", border: "0px", borderRadius: ".3em", height: "2em", color: "white" }}></input>
        </div>
        <h1>{this.state.resValue}</h1>
      </div>
    );
  }
}


