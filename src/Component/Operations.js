import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Operations extends Component {
  constructor() {
    super();
    this.state = {
      fillVendor: "",
      fillCategory: "",
      fillAmount: "",
    };
  }
  fillAmount = (e) => {
    this.setState({ fillAmount: e.target.value });
  };
  fillCategory = (e) => {
    this.setState({ fillCategory: e.target.value });
  };
  fillVendor = (e) => {
    this.setState({ fillVendor: e.target.value });
  };
  updateTransactionPlus = () => {
    let transaction = {
      amount: this.state.fillAmount,
      vendor: this.state.fillVendor,
      category: this.state.fillCategory,
    };
    this.props.updateTransaction(transaction);
  };
  updateTransactionMinus = () => {
    let transaction = {
      amount: this.state.fillAmount * -1,
      vendor: this.state.fillVendor,
      category: this.state.fillCategory,
    };
    this.props.updateTransaction(transaction);
  };
  render() {
    return (
      <div className="operations">
        <div className="transInput">
          <input
            type="number"
            id="amount"
            placeholder="Amount"
            value={this.state.fillAmount}
            onChange={this.fillAmount}
          ></input>
          <input
            type="text"
            id="vendor"
            placeholder="vendor"
            value={this.state.fillVendor}
            onChange={this.fillVendor}
          ></input>
          <input
            type="text"
            id="category"
            placeholder="category"
            value={this.state.fillCategory}
            onChange={this.fillCategory}
          ></input>
        </div>
        <div className="deposit withdraw">
          <button id="deposit" onClick={this.updateTransactionPlus}>
            <Link to="/">Deposit </Link>
          </button>
          <button id="withdraw" onClick={this.updateTransactionMinus}>
            <Link to="/">Withdraw</Link>
          </button>
        </div>
      </div>
    );
  }
}
