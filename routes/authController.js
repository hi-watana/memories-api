var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

// Dummy user for demonstration
const DUMMY_USERNAME = process.env.DUMMY_USERNAME || 'user';
const DUMMY_PASSWORD = process.env.DUMMY_PASSWORD || 'password';
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Use environment variable for secret

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === DUMMY_USERNAME && password === DUMMY_PASSWORD) {
    // In a real application, you would fetch user from database and verify password
    const user = { id: 1, username: DUMMY_USERNAME }; // Payload for the token

    jwt.sign(user, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) {
        console.error('Error signing token:', err);
        return res.status(500).json({ message: 'Error generating token' });
      }
      res.json({ token });
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
