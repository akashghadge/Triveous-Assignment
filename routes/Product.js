const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Import your Product model


router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
});

router.get('/category/:categoryID', async (req, res) => {
    try {
        const categoryID = req.params.categoryID;
        const products = await Product.find({ categoryBelongs: categoryID });

        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found for the given category ID.' });
        }

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/add', async (req, res) => {
    try {
        const {
            name,
            categoryBelongs,
            title,
            price,
            description,
            availability,
            quantity
        } = req.body;
        const newProduct = new Product({
            name,
            categoryBelongs,
            title,
            price,
            description,
            availability,
            quantity
        });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error creating product', error: error.message });
    }
});

router.delete('/delete/all', async (req, res) => {
    try {
        await Product.deleteMany({});
        res.json({ message: 'All products deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting products', error: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
});



module.exports = router;
