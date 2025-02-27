const express = require("express");
const Stock = require("../models/stockModel");
const router = express.Router();

router.get("/", async (req, res) => {
  const stocks = await Stock.find();
  res.json(stocks);
});

router.post("/add", async (req, res) => {
  const stock = new Stock(req.body);
  await stock.save();
  res.json(stock);
});

router.put("/favorite/:id", async (req, res) => {
  const stock = await Stock.findById(req.params.id);
  stock.isFavorite = !stock.isFavorite;
  await stock.save();
  res.json(stock);
});

router.delete("/:id", async (req, res) => {
  await Stock.findByIdAndDelete(req.params.id);
  res.json({ message: "Stock removed" });
});

module.exports = router;