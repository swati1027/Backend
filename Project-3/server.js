require('dotenv').config();
const express = require('express');
const app     = express();

// Parse JSON request body
app.use(express.json());

// Mount routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api',      require('./routes/protectedRoutes'));

// Home route
app.get('/', (req, res) => {
  res.json({
    message: '🔐 JWT Auth Server is Running!',
    routes: {
      register:  'POST /api/auth/register',
      login:     'POST /api/auth/login',
      dashboard: 'GET  /api/dashboard  (token required)',
      profile:   'GET  /api/profile    (token required)',
      admin:     'GET  /api/admin      (admin role only)'
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});