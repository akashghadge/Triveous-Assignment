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
// routes setting
app.use('/api/user', User);


app.listen(port, () => {
    console.log("Server is listening on port ", port);
}) 