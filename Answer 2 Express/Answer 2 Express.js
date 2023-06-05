const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const authorizedUsers = [
  { username: 'user1', password: '123456' },
  { username: 'user2', password: '123456' }
];

const authenticateMiddleware = (req, res, next) => {
  const isAuthenticated = checkAuthentication(req);
  
  if (isAuthenticated) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

const checkAuthentication = (req) => {
  const { username, password } = req.body;
  
  const user = authorizedUsers.find(
    (u) => u.username === username && u.password === password
  );
  
  return user !== undefined;
};

app.use(authenticateMiddleware);

app.post('/data', (req, res) => {
  const data = req.body;
  
  res.send('Data received');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
