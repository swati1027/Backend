# Project 1 - Stateless REST API Server

## Overview

This project is a Stateless REST API built using Node.js and Express.js. It demonstrates the implementation of RESTful APIs without using any database. All data is stored temporarily in memory and is lost when the server restarts.

## Features

* User Registration API
* Product Management API
* Order Management API
* GET and POST HTTP Methods
* JSON Request and Response Handling
* Express Router
* CORS Support
* Stateless Architecture
* No Database Required

## Technologies Used

* Node.js
* Express.js
* CORS
* Nodemon
* JSON

## Project Structure

```text
Project-1-Stateless-REST-API/
│
├── node_modules/
├── routes/
│   ├── users.js
│   ├── products.js
│   └── orders.js
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/swati1027/DecodeLabs-Internship.git
```

Navigate to the project directory:

```bash
cd Project-1-Stateless-REST-API
```

Install dependencies:

```bash
npm install
```

## Running the Project

Start the server:

```bash
npm start
```

For development mode:

```bash
npm run dev
```

Server URL:

```text
http://localhost:5000
```

## API Endpoints

### Home Route

#### GET /

Response:

```json
{
  "message": "Server Running"
}
```

---

### User APIs

#### Register User

**POST** `/api/users/register`

Request Body:

```json
{
  "name": "Swati",
  "email": "swati@example.com"
}
```

#### Get All Users

**GET** `/api/users`

---

### Product APIs

#### Add Product

**POST** `/api/products`

Request Body:

```json
{
  "name": "Laptop",
  "price": 50000
}
```

#### Get All Products

**GET** `/api/products`

---

### Order APIs

#### Create Order

**POST** `/api/orders`

Request Body:

```json
{
  "product": "Laptop",
  "quantity": 1
}
```

#### Get All Orders

**GET** `/api/orders`

---

## Testing

You can test the APIs using:

* Postman
* Thunder Client
* Insomnia

## Key Concepts Demonstrated

* REST API Development
* HTTP Methods (GET, POST)
* Express Routing
* Middleware Usage
* JSON Data Handling
* Stateless Server Design

## Future Improvements

* MongoDB Integration
* JWT Authentication
* Password Hashing
* Input Validation
* Error Handling
* PUT and DELETE Operations

## Author

**Swati Matre**

Backend Development Internship Project

## License

This project is created for learning and educational purposes.
