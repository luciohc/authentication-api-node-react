const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.createUser(username, email, hashedPassword);
  res.json({ message: 'User created', user });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.getUserByEmail(email);
  if (!user) return res.status(400).json({ message: 'User not found' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, role: user.role }, 'secret_key', { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Token missing' });

  const token = authHeader.split(' ')[1];  // Extrai o token após o "Bearer"

  if (!token) return res.status(401).json({ message: 'Token missing' });

  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Token invalid' });
    req.userId = decoded.id;
    next();
  });
};


module.exports = { register, login, verifyToken };
