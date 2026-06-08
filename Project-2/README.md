# Flask CRUD API with MySQL

## Project Overview

This is a simple RESTful CRUD API built using Flask, Flask-SQLAlchemy, and MySQL. It allows users to create, read, update, and delete user records.

## Features

* Create a new user
* Get all users
* Get a user by ID
* Update user details
* Delete a user
* MySQL database integration using SQLAlchemy
* Email uniqueness validation

## Technologies Used

* Python
* Flask
* Flask-SQLAlchemy
* PyMySQL
* MySQL

## Project Structure

```
project/
│
├── app.py
├── config.py
├── models.py
|----README.md
├── requirements.txt
│
└── routes/
    └── users.py
```

## Installation

### 1. Clone the Repository

```bash
git clone <https://github.com/swati1027/DecodeLabs-Internship.git>
cd project
```

### 2. Create Virtual Environment

```bash
python -m venv venv
```

Activate the virtual environment:

**Windows**

```bash
venv\Scripts\activate
```

**Linux/Mac**

```bash
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Create MySQL Database

```sql
CREATE DATABASE crud_db;
```

### 5. Configure Database

Update `config.py` if needed:

```python
class Config:
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:swati123@localhost/crud_db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
```

### 6. Run the Application

```bash
python app.py
```

Server will start at:

```
http://127.0.0.1:5000
```

## API Endpoints

### Create User

**POST** `/api/users`

Request Body:

```json
{
  "name": "Swati",
  "email": "swati@example.com",
  "role": "user",
  "status": "active"
}
```

### Get All Users

**GET** `/api/users`

### Get User By ID

**GET** `/api/users/{id}`

### Update User

**PUT** `/api/users/{id}`

Request Body:

```json
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "role": "admin",
  "status": "active"
}
```

### Delete User

**DELETE** `/api/users/{id}`

## Dependencies

requirements.txt

```txt
flask
flask-sqlalchemy
pymysql
```

## Sample Response

```json
{
  "id": 1,
  "name": "Swati",
  "email": "swati@example.com",
  "role": "user",
  "status": "active",
  "created_at": "2026-06-08T10:00:00"
}
```

## Author

Swati Matre

## License

This project is for learning and educational purposes.
