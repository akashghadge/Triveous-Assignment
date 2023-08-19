const express = require('express');
const router = express.Router();
const User = require("../models/User")
const Product = require("../models/Product")
const Order = require("../models/Order")
const Category = require("../models/Category")

// Route to reset or drop all collections in the database
router.get('/', async (req, res) => {
    try {
        await User.deleteMany({});
        await Product.deleteMany({});
        await Order.deleteMany({});
        await Category.deleteMany({});
        res.status(200).json("All Data Reset")
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
