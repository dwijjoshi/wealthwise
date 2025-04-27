const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const user = require("./routes/user");
const transaction = require("./routes/transaction");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", user);
app.use("/api/v1", transaction);
module.exports = app;
