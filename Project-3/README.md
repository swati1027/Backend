# 🔐 Secure Authentication System

**Backend Development Project 3**

## 📖 Overview

This project implements a secure authentication system using Node.js, Express, JSON Web Tokens (JWT), and password hashing. It allows users to register, log in, receive authentication tokens, and access protected routes securely.

The project demonstrates industry-standard authentication and authorization techniques used in modern backend applications.

---

## 🚀 Features

* User Registration
* User Login
* Password Hashing
* JWT Token Generation
* Protected Routes
* Authentication Middleware
* Environment Variable Configuration
* Secure API Access

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* JSON Web Token (JWT)
* bcryptjs
* dotenv

---

## 📂 Project Structure

```text
Project-3/
│
├── middleware/
│
├── routes/
│
├── node_modules/
│
├── .env
├── createToken.js
├── verifyToken.js
├── server.js
├── package.json
├── package-lock.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone <https://github.com/swati1027/Backend.git>

```

### 2. Navigate to Project Folder

```bash
cd Project-3
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
JWT_SECRET=your_secret_key
PORT=3000
```

---

## ▶️ Run the Application

```bash
node server.js
```

Or if nodemon is installed:

```bash
nodemon server.js
```

Server will run at:

```text
http://localhost:3000
```

---

## 🔑 Authentication Flow

### User Registration

* User enters email and password
* Password is hashed using bcrypt
* User data is stored securely

### User Login

* Credentials are verified
* JWT token is generated
* Token is returned to the user

### Protected Routes

* User sends JWT token in Authorization header
* Middleware verifies token
* Access is granted if token is valid

---

## 📡 API Endpoints

### Register User

```http
POST /register
```

Example Request:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

---

### Login User

```http
POST /login
```

Example Request:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Example Response:

```json
{
  "token": "jwt_token_here"
}
```

---

### Protected Route

```http
GET /protected
```

Header:

```text
Authorization: Bearer <jwt_token>
```

Example Response:

```json
{
  "message": "Access granted"
}
```

---

## 🔒 Security Features

* Password Hashing with bcrypt
* JWT Authentication
* Token Verification Middleware
* Protected API Routes
* Environment Variable Security

---

## 🎯 Learning Outcomes

Through this project, you will learn:

* Authentication and Authorization
* Password Security
* JWT Token Creation
* Middleware Implementation
* Secure Backend Development
* API Protection Techniques


---

## 📄 License

This project is created for educational and training purposes.
