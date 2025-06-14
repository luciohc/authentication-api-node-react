const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Rota protegida
router.get('/protected', authController.verifyToken, (req, res) => {
  res.json({ message: 'Access granted to protected route!' });
});

module.exports = router;
