const express = require("express");
const cors = require("cors");
const connectDB = require("./config");
const stockRoutes = require("./routes/stockRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/stocks", stockRoutes);

connectDB().then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});