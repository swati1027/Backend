const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'decodelabs_secret_key_2026';

const protect = (req, res, next) => {

  // Step 1: Read Authorization header
  const authHeader = req.headers['authorization'];

  // Step 2: Check header exists and starts with Bearer
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. No token provided.'
    });
  }

  // Step 3: Extract token from "Bearer <token>"
  const token = authHeader.split(' ')[1];

  // Step 4: Verify token
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // attach decoded user to request
    next();             // allow request to continue

  } catch (err) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token.'
    });
  }
};

module.exports = { protect };