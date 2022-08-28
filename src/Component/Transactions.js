import React, { Component } from "react";
import Operations from "./Operations";
import Transaction from "./Transaction";
import { Link } from "react-router-dom";

export default class Transactions extends Component {
  deleteTransaction = (id) => {
    console.log(this);
    let Transactions = [...this.props.Transactions];
    for (let i = 0; i < Transactions.length; i++) {
      if (Transactions[i].id == id) {
        Transactions.splice(i, 1);
      }
    }
    this.props.deleteTransaction(Transactions, id);
  };
  sendTransaction = () => {
    {
      return (
        <div className="container">
          <div className="transactions">
            <div className="transaction-header">
              <h3>Amount</h3>
              <h3>Vendor</h3>
              <h3>Category</h3>
              <h3>Delete</h3>
            </div>
            {this.props.Transactions.map((t) => {
              return (
                <Transaction
                  Transaction={t}
                  key={t.id}
                  deleteTransaction={this.deleteTransaction}
                />
              );
            })}
          </div>
          <div className="options">
            <div className="operationsLink">
              <Link to="/operation">operations</Link>
            </div>
            <div className="operationsLink">
              <Link to="/Category">Category</Link>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return this.sendTransaction();
  }
}
