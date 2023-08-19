# Triveous Assignment

Short project description.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)

## Overview

Provide a brief introduction to your project, its purpose, and key features.

## Features

1. **Category Listing**:
   - Retrieve a list of categories from the database.
   - Display category names and IDs to users.
   - Endpoint: `/api/category/all`

2. **Product Listing**:
   - Fetch products based on a specific category ID.
   - Return essential product details: title, price, description, and availability.
   - Endpoint: `/api/products/category/:categoryID`

3. **Product Details**:
   - Fetch detailed information about a specific product by its ID.
   - Provide information such as name, title, price, description, and availability.
   - Endpoint: `/api/products/:id`

4. **Cart Management**:
   - Allow users to add products to their cart.
   - Provide endpoints to view the cart, update product quantities, and remove items.
   - Endpoints:
     - Add to cart: `POST /api/cart/add`
     - View cart: `GET /api/cart/all`
     - Update quantity: `PUT /api/cart/update/<product_id>`
     - Remove item: `DELETE /api/cart/delete/<product_id>`

5. **Order Placement**:
   - Enable users to place orders with products from their cart.
   - Allow authenticated users
   - Create an order record, associating it with the user and products in their cart.
   - Endpoint: `POST /api/my-orders/add`

6. **Order History**:
   - Allow authenticated users to view their order history.
   - Retrieve a list of orders associated with the user.
   - Endpoint: `GET /api/my-orders/`

7. **Order Details**:
   - Fetch detailed information about a specific order by its ID.
   - Provide order information, products, quantities, and date of placement.
   - Endpoint: `GET /api/my-orders/<order_id>`

8. **User Registration and Login**:
   - Implement API endpoints for user registration and authentication.
   - Allow users to create accounts and log in securely.
   - Endpoints:
     - Register: `POST /api/user/create`
     - Login: `POST /api/user/in`

## Getting Started

Explain how to set up and run your project locally. Include steps for installing dependencies, configuring environment variables, and starting the development server.

### Installation

```bash
npm install
```
### Start Project

```bash
npm run dummy-data
```
```bash
num start
```
