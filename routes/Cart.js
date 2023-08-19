const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import your User model

router.get('/all', async (req, res) => {
    try {
        const user = await User.findById(res.locals.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user.Cart);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cart items', error: error.message });
    }
});

router.post('/add', async (req, res) => {
    try {
        const { ProductID, quantity } = req.body;
        const user = await User.findById(res.locals.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const cartItem = { ProductID, quantity };
        user.Cart.push(cartItem);

        await user.save();
        res.json(user.Cart);
    } catch (error) {
        res.status(500).json({ message: 'Error adding item to cart', error: error.message });
    }
});

// DELETE item from user's cart by product ID
router.delete('/delete/:ProductID', async (req, res) => {
    try {
        const user = await User.findById(res.locals.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.Cart = user.Cart.filter(item => item.ProductID.toString() !== req.params.ProductID);

        await user.save();
        res.json(user.Cart);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item from cart', error: error.message });
    }
});

// PUT update quantity of an item in user's cart by product ID
router.put('/update/:ProductID', async (req, res) => {
    try {
        const { quantity } = req.body;
        const user = await User.findById(res.locals.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const cartItem = user.Cart.find(item => item.ProductID.toString() === req.params.ProductID);
        if (!cartItem) {
            return res.status(404).json({ message: 'Item not found in cart' });
        }

        cartItem.quantity = quantity;

        await user.save();
        res.json(user.Cart);
    } catch (error) {
        res.status(500).json({ message: 'Error updating item in cart', error: error.message });
    }
});

module.exports = router;
