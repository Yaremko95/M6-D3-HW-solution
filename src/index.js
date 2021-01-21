const express = require("express");
require("dotenv").config();
const productsRouter = require("./services/products");
const db = require("./db");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/products", productsRouter);
db.sequelize.sync({ force: false }).then((result) => {
  server.listen(process.env.PORT || 3002, () => {
    console.log("server is running on port ", process.env.PORT || 3002);
  });
});
