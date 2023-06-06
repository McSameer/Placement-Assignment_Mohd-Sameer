const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

const users = [
  { id: 1, username: 'user1', password: '123456' },
  { id: 2, username: 'user2', password: '123456' }
];

const secretKey = '987654321';

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    res.status(409).json({ error: 'Username already exists' });
  } else {
    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);

    const token = jwt.sign({ id: newUser.id, username: newUser.username }, secretKey, { expiresIn: '1h' });

    res.json({ token });
  }
});

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
