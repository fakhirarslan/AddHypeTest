require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cartRouter = require("./routes/SharedCart");
const loginRouter = require("./routes/User.js");
require("./config/database").run().catch(console.dir);
const app = express();

// Port on which backend will run
const PORT = process.env.PORT;

// middleware
app.use(express.json());

// register the bodyParser middleware here
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// login route
app.use("/api", loginRouter);

// initial route
app.use("/api/cart", cartRouter);

// server listen
app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;
