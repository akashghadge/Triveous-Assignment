const express = require('express');
const router = express.Router();
const User = require("../models/User")
const Order = require("../models/Order")

router.post("/add", async (req, res) => {
    try {
        const userId = res.locals.id; // User's ID from res.locals.id
        const cartItemId = req.body.cartItemId; // Cart item ID from req.body

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const cartItem = user.Cart.find(item => item.id.toString() === cartItemId);
        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        // Create an order document
        const newOrder = new Order({
            quantity: cartItem.quantity,
            productId: cartItem.ProductID,
            userId: userId
        });

        const savedOrder = await newOrder.save();

        // Add the order ID to the user's MyOrders list
        user.MyOrders.push(savedOrder._id);
        await user.save();

        res.json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error adding order', error: error.message });
    }
})


router.get("/history", async (req, res) => {
    try {
        const userId = res.locals.id;

        const user = await User.findById(userId).populate('MyOrders');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const orderHistory = user.MyOrders;

        res.json(orderHistory);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order history', error: error.message });
    }
});

router.get('/history/:id', async (req, res) => {
    try {
        const userId = res.locals.id;
        const orderId = req.params.id;

        const user = await User.findById(userId).populate('MyOrders');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const order = user.MyOrders.find(order => order._id.toString() === orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found in user\'s history' });
        }

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order', error: error.message });
    }
});



module.exports = router;
