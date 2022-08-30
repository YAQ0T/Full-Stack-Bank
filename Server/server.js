const { json } = require("express");
const express = require("express");
const port = 3001;
const app = express();
let cors = require("cors");
app.use(cors());
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
const Transaction = require("../Server/DataBase/mongo");

app.get("/Transactions", (req, res) => {
  Transaction.find({}, function (err, bank) {
    let arrofbank = [];
    bank.map((b) => {
      let bank = {
        id: b.id,
        amount: b.amount,
        vendor: b.vendor,
        category: b.category,
      };
      arrofbank.push(bank);
    });
    res.send(arrofbank);
  });
});
app.post("/Transaction", function (req, res) {
  TransactionData = req.body;
  console.log(TransactionData);
  let T = new Transaction({
    id: TransactionData.id,
    amount: TransactionData.amount,
    vendor: TransactionData.vendor,
    category: TransactionData.category,
  });
  T.save();
  res.send("Done");
});
app.delete("/Transaction/:id", async function (req, res) {
  id = req.params.id;

  await Transaction.deleteMany({ id: id });

  res.send("Deleted");
});
