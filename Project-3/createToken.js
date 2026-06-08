require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'decodelabs_secret_key_2026';

const payload = {
  id: '101',
  name: 'Arjun Sharma',
  email: 'arjun@decodelabs.com',
  role: 'user'
};

const token = jwt.sign(payload, SECRET, { expiresIn: '1h' });

console.log('\n✅ Token Generated Successfully!\n');
console.log('SECRET USED :', SECRET);
console.log('\nTOKEN       :', token);

const parts = token.split('.');
console.log('\n--- 3 Parts of JWT ---');
console.log('Header    :', parts[0]);
console.log('Payload   :', parts[1]);
console.log('Signature :', parts[2]);