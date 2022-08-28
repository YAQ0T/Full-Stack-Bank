const mongoose = require("mongoose");

var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/Banks", { useNewUrlParser: true });

const TransactionSchema = new Schema({
  id: Number,
  amount: Number,
  vendor: String,
  category: String,
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
