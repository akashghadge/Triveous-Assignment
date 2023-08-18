const Category = require('./models/Category'); // Import your Category model
const Product = require('./models/Product'); // Import your Category model
require("./DB/conn");
const dummyCategories = [
    { categoryName: 'Electronics', categoryProducts: [] },
    { categoryName: 'Clothing', categoryProducts: [] },
    { categoryName: 'Books', categoryProducts: [] },
    { categoryName: 'Home Appliances', categoryProducts: [] },
    { categoryName: 'Beauty and Health', categoryProducts: [] }
];

// Category.insertMany(dummyCategories)
//     .then(() => {
//         console.log('Dummy categories inserted successfully');
//     })
//     .catch((error) => {
//         console.error('Error inserting dummy categories:', error);
//     });


const categories = [
    "64dfaff82397375eb73a66dd",
    "64dfaff82397375eb73a66de",
    "64dfaff82397375eb73a66df",
    "64dfaff82397375eb73a66e0",
    "64dfaff82397375eb73a66e1"
];

const dummyProducts = [
    {
        name: 'Smartphone X',
        categoryBelongs: categories[0], // Electronics
        title: 'High-end Smartphone',
        price: 999.99,
        description: 'A feature-rich smartphone.',
        availability: true,
        quantity: 10
    },
    {
        name: 'Laptop Pro',
        categoryBelongs: categories[0], // Electronics
        title: 'Powerful Laptop',
        price: 1499.99,
        description: 'A high-performance laptop for professionals.',
        availability: true,
        quantity: 5
    },
    {
        name: 'T-shirt Classic',
        categoryBelongs: categories[1], // Clothing
        title: 'Comfortable T-shirt',
        price: 19.99,
        description: 'A classic and comfortable cotton t-shirt.',
        availability: true,
        quantity: 50
    },
    {
        name: 'Book of Knowledge',
        categoryBelongs: categories[2], // Books
        title: 'Encyclopedia of Everything',
        price: 79.99,
        description: 'A comprehensive encyclopedia covering a wide range of topics.',
        availability: true,
        quantity: 15
    },
    {
        name: 'Toaster Deluxe',
        categoryBelongs: categories[3], // Home Appliances
        title: 'Premium Toaster',
        price: 39.99,
        description: 'A sleek and efficient toaster for your kitchen.',
        availability: true,
        quantity: 8
    },
    {
        name: 'Face Cream Revive',
        categoryBelongs: categories[4], // Beauty and Health
        title: 'Anti-Aging Face Cream',
        price: 29.99,
        description: 'A rejuvenating face cream to restore your skin.',
        availability: true,
        quantity: 20
    },
    {
        name: 'Wireless Earbuds',
        categoryBelongs: categories[0], // Electronics
        title: 'True Wireless Earbuds',
        price: 79.99,
        description: 'High-quality wireless earbuds with noise cancellation.',
        availability: true,
        quantity: 30
    },
    {
        name: 'Denim Jeans',
        categoryBelongs: categories[1], // Clothing
        title: 'Classic Denim Jeans',
        price: 49.99,
        description: 'Timeless and stylish denim jeans for everyday wear.',
        availability: true,
        quantity: 25
    },
    {
        name: 'Mystery Novel',
        categoryBelongs: categories[2], // Books
        title: 'Gripping Mystery Novel',
        price: 12.99,
        description: 'A page-turning mystery novel that will keep you on the edge of your seat.',
        availability: true,
        quantity: 12
    },
    {
        name: 'Coffee Maker',
        categoryBelongs: categories[3], // Home Appliances
        title: 'Automatic Coffee Maker',
        price: 59.99,
        description: 'An easy-to-use coffee maker for brewing your favorite morning blend.',
        availability: true,
        quantity: 7
    },
];

Product.insertMany(dummyProducts)
    .then(() => {
        console.log('Dummy products inserted successfully');
    })
    .catch((error) => {
        console.error('Error inserting dummy products:', error);
    });
