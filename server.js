"use strict";
// inital set up of server
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// must needed packages
const cros = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");


// middlewares
app.use(express.json());
app.use(cros());
app.use(cookieParser());


// getting db connection
require("./DB/conn");

// middlewares
const verify = require("./middleware/verify");

// api routers
const User = require("./routes/User");
const Category = require("./routes/Category")
const Product = require("./routes/Product")
const Cart = require("./routes/Cart")
// const Order = require("./routes/Order")

// routes setting
app.use('/api/user', User);
app.use('/api/category', Category);
app.use('/api/product', Product);
app.use('/api/Cart', verify, Cart);
// app.use('/api/Order', Order);


app.listen(port, () => {
    console.log("Server is listening on port ", port);
}) 