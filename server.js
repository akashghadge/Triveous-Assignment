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
const Order = require("./routes/Order")
const UserOrder = require("./routes/UserOrder");
const Reset = require("./routes/Reset")

// routes setting
app.use('/api/user', User);
app.use('/api/category', Category);
app.use('/api/products', Product);
app.use('/api/orders', Order);
app.use('/api/cart', verify, Cart);
app.use('/api/my-orders', verify, UserOrder);
app.use('/api/reset', Reset)

app.listen(port, () => {
    console.log("Server is listening on port ", port);
}) 