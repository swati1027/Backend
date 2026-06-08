const express     = require('express');
const router      = express.Router();
const { protect } = require('../middleware/authMiddleware');

// DASHBOARD — requires valid token
router.get('/dashboard', protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: `Welcome ${req.user.name}!`,
    user: req.user
  });
});

// PROFILE — requires valid token
router.get('/profile', protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Profile fetched successfully.',
    data: {
      id:    req.user.id,
      name:  req.user.name,
      email: req.user.email,
      role:  req.user.role
    }
  });
});

// ADMIN — requires token AND admin role
router.get('/admin', protect, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Forbidden. Admins only.'
    });
  }
  res.status(200).json({
    success: true,
    message: 'Welcome Admin!'
  });
});

module.exports = router;