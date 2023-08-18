const express = require('express');
const router = express.Router();
const Category = require('../models/Category'); // Import your Category model

// GET all categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching categories', error: error.message });
    }
});

module.exports = router;
