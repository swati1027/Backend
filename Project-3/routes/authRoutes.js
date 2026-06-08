const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'decodelabs_secret_key_2026';

// Temporary in-memory database
const users = [];

// REGISTER  POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and password are required.'
      });
    }

    const exists = users.find(u => u.email === email);
    if (exists) {
      return res.status(409).json({
        success: false,
        message: 'Email already registered.'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      role: 'user'
    };
    users.push(newUser);

    console.log('✅ New user registered:', email);

    res.status(201).json({
      success: true,
      message: 'Registration successful!'
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// REGISTER ADMIN  POST /api/auth/register-admin
router.post('/register-admin', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and password are required.'
      });
    }

    const exists = users.find(u => u.email === email);
    if (exists) {
      return res.status(409).json({
        success: false,
        message: 'Email already registered.'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      role: 'admin'
    };
    users.push(newUser);

    console.log('✅ Admin registered:', email);

    res.status(201).json({
      success: true,
      message: 'Admin registration successful!'
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// LOGIN  POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required.'
      });
    }

    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials.'
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials.'
      });
    }

    const token = jwt.sign(
      {
        id:    user.id,
        name:  user.name,
        email: user.email,
        role:  user.role
      },
      SECRET,
      { expiresIn: '1h' }
    );

    console.log('✅ User logged in:', email);

    res.status(200).json({
      success: true,
      message: 'Login successful!',
      token,
      user: {
        id:    user.id,
        name:  user.name,
        email: user.email,
        role:  user.role
      }
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;