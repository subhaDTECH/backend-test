//require express
const express = require("express");
const app = express();
const OrderRouter = require("./routes/orderRoutes");

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
app.use("/api/v1", OrderRouter);

//export app
module.exports = app;
