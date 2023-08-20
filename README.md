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
2. **Product Listing**:
3. **Product Details**:
4. **Cart Management**:
5. **Order Placement**:
6. **Order History**:
7. **Order Details**:
8. **User Registration and Login**:

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


## API Documentation

### Cart Endpoints

#### Get User's Cart

```http
GET /api/cart/all
```

Get all items in the user's cart.

| Header      | Description             |
| :---------- | :---------------------- |
| `Authorization` | **Required**. User's JWT token |

#### Add Item to Cart

```http
POST /api/cart/add
```

Add a product to the user's cart.

| Header      | Description             |
| :---------- | :---------------------- |
| `Authorization` | **Required**. User's JWT token |

| Body        | Type     | Description                          |
| :---------- | :------- | :----------------------------------- |
| `ProductID` | `string` | **Required**. ID of the product     |
| `quantity`  | `number` | **Required**. Quantity of the product |

#### Delete Item from Cart

```http
DELETE /api/cart/delete/${ProductID}
```

Delete a product from the user's cart.

| Header      | Description             |
| :---------- | :---------------------- |
| `Authorization` | **Required**. User's JWT token |

| Parameter   | Type     | Description                    |
| :---------- | :------- | :----------------------------- |
| `ProductID` | `string` | **Required**. ID of the product |

#### Update Item in Cart

```http
PUT /api/cart/update/${ProductID}
```

Update the quantity of a product in the user's cart.

| Header      | Description             |
| :---------- | :---------------------- |
| `Authorization` | **Required**. User's JWT token |

| Parameter   | Type     | Description                    |
| :---------- | :------- | :----------------------------- |
| `ProductID` | `string` | **Required**. ID of the product |

| Body        | Type     | Description                   |
| :---------- | :------- | :---------------------------- |
| `quantity`  | `number` | **Required**. New quantity    |

### Category Endpoints

#### Get All Categories

```http
GET /api/category/all
```

Get a list of all product categories.

### Product Endpoints

#### Get All Products

```http
GET /api/products
```

Get a list of all products.

#### Get Product by ID

```http
GET /api/products/${id}
```

Get product details by its ID.

| Parameter | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `id`      | `string` | **Required**. Product ID |

#### Get Products by Category

```http
GET /api/products/category/${categoryID}
```

Get products belonging to a specific category.

| Parameter     | Type     | Description                |
| :------------ | :------- | :------------------------- |
| `categoryID`  | `string` | **Required**. Category ID |

#### Add Product

```http
POST /api/products/add
```

Add a new product.

| Header      | Description             |
| :---------- | :---------------------- |
| `Authorization` | **Required**. User's JWT token |

| Body        | Type     | Description                                      |
| :---------- | :------- | :----------------------------------------------- |
| `name`      | `string` | **Required**. Product name                      |
| `categoryBelongs` | `string` | **Required**. ID of the category the product belongs to |
| `title`     | `string` | **Required**. Product title                     |
| `price`     | `number` | **Required**. Product price                     |
| `description` | `string` | **Required**. Product description               |
| `availability` | `boolean` | **Required**. Product availability             |
| `quantity`  | `number` | **Required**. Product quantity                  |

#### Delete All Products

```http
DELETE /api/products/delete/all
```

Delete all products.

| Header      | Description             |
| :---------- | :---------------------- |
| `Authorization` | **Required**. User's JWT token |

#### Delete Product by ID

```http
DELETE /api/products/delete/${id}
```

Delete a product by its ID.

| Header      | Description             |
| :---------- | :---------------------- |
| `Authorization` | **Required**. User's JWT token |

| Parameter   | Type     | Description            |
| :---------- | :------- | :--------------------- |
| `id`        | `string` | **Required**. Product ID |

### User Endpoints

#### Create User

```http
POST /api/user/create
```

Create a new user.

| Body        | Type     | Description            |
| :---------- | :------- | :--------------------- |
| `name`      | `string` | **Required**. User name |
| `password`  | `string` | **Required**. User password |

#### User Login

```http
POST /api/user/in
```

User login.

| Body        | Type     | Description            |
| :---------- | :------- | :--------------------- |
| `name`      | `string` | **Required**. User name |
| `password`  | `string` | **Required**. User password |

#### Get All Users

```http
GET /api/user/all
```

Get a list of all users.

| Header      | Description             |
| :---------- | :---------------------- |
| `Authorization` | **Required**. User's JWT token |

#### Delete All Users

```http
DELETE /api/user/all
```

Delete all users.

| Header      | Description             |
| :---------- | :---------------------- |
| `Authorization` | **Required**. User's JWT token |

### User Order Endpoints

#### Add Order

```http
POST /api/my-orders/add
```

Add an order to the user's order history.

| Header      | Description             |
| :---------- | :---------------------- |
| `Authorization` | **Required**. User's JWT token |

| Body        | Type     | Description            |
| :---------- | :------- | :--------------------- |
| `cartItemId` | `string` | **Required**. Cart item ID |

#### Get Order History

```http
GET /api/my-orders
```

Get the user's order history.

| Header      | Description             |
| :---------- | :---------------------- |
| `Authorization` | **Required**. User's JWT token |

#### Get Order by ID

```http
GET /api/my-orders/${id}
```

Get order details by its ID.

| Header      | Description             |
| :---------- | :---------------------- |
| `Authorization` | **Required**. User's JWT token |

| Parameter   | Type     | Description            |
| :---------- | :------- | :--------------------- |
| `id`        | `string` | **Required**. Order ID |
