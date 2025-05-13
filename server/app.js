const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const user = require("./routes/user");
const transaction = require("./routes/transaction");
const bills = require("./routes/recurringBills");
const card = require("./routes/card");
const paymentMethods = require("./routes/paymentMethod");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use(
  cors({
    origin: ["https://wealthwise-app.netlify.app", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", user);
app.use("/api/v1", transaction);
app.use("/api/v1", bills);
app.use("/api/v1", card);
app.use("/api/v1", paymentMethods);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
