import React, { Component } from "react";
import Category from "./Category";

export default class Transaction extends Component {
  deleteTransaction = () => {
    let id = this._reactInternals.key;
    this.props.deleteTransaction(id);
  };
  render() {
    let Transaction = this.props.Transaction;
    return (
      <div className="transaction" data={Transaction.id}>
        <div className="amount">{Transaction.amount}</div>
        <div className="vendor">{Transaction.vendor}</div>
        <div className="category">{Transaction.category}</div>
        <span
          className="material-symbols-outlined"
          onClick={this.deleteTransaction}
        >
          delete
        </span>
      </div>
    );
  }
}
