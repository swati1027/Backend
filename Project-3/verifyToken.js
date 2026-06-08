require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'decodelabs_secret_key_2026';
const token  = process.env.JWT_TOKEN;

console.log('\n--- DEBUG ---');
console.log('SECRET :', SECRET);
console.log('TOKEN  :', token);
console.log('-------------\n');

try {
  const decoded = jwt.verify(token, SECRET);

  console.log('✅ Token is VALID!\n');
  console.log('ID      :', decoded.id);
  console.log('Name    :', decoded.name);
  console.log('Email   :', decoded.email);
  console.log('Role    :', decoded.role);
  console.log('Issued  :', new Date(decoded.iat * 1000).toLocaleString());
  console.log('Expires :', new Date(decoded.exp * 1000).toLocaleString());

} catch (err) {
  console.log('❌ Token FAILED:', err.message);
}