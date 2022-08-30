import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Transactions from "./Component/Transactions";
import Transaction from "./Component/Transaction";
import Operations from "./Component/Operations";
import axios from "axios";
import Category from "./Component/Category";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Transactions: [],
    };
  }
  getTransactions() {
    axios
      .get("http://localhost:3001/Transactions")
      .then((res) => {
        this.setState({ Transactions: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  async postTransaction(transaction) {
    await axios
      .post("http://localhost:3001/Transaction", transaction)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.getTransactions();
  }
  updateTransaction = (Transaction) => {
    let Transactions = [...this.state.Transactions];
    if (Transactions.length > 0) {
      let id = Transactions[Transactions.length - 1].id + 1;
      Transaction.id = id;
    } else {
      Transaction.id = 1;
    }
    this.postTransaction(Transaction);
    Transactions.push(Transaction);

    this.setState({ Transactions: Transactions });
  };
  deleteTransaction = async (Transactions, id) => {
    await axios({
      method: "delete",
      url: "http://localhost:3001/Transaction/" + id,
    });
    this.getTransactions();
  };
  getBalance = () => {
    let balance = 0;
    this.state.Transactions.map((t) => {
      return (balance += Number(t.amount));
    });
    return balance;
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          {this.getBalance() > 500 ? (
            <h4 className="balance" style={{ color: "green" }}>
              Balance: {this.getBalance()}
            </h4>
          ) : (
            <h4 className="balance" style={{ color: "red" }}>
              Balance: {this.getBalance()}
            </h4>
          )}

          <h1 className="title">Bank Of Nablus</h1>
        </div>

        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Transactions
                  Transactions={this.state.Transactions}
                  deleteTransaction={this.deleteTransaction}
                />
              }
            ></Route>
            <Route
              path="/Transaction"
              exact
              element={<Transaction Transactions={this.state.Transactions} />}
            ></Route>
            <Route
              path="/operation"
              exact
              element={
                <Operations updateTransaction={this.updateTransaction} />
              }
            ></Route>
            <Route
              path="/Category"
              exact
              element={<Category Transactions={this.state.Transactions} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
