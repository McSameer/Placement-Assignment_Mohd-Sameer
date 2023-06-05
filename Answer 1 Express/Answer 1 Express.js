const express = require('express');
const app = express();

app.get('/post', (req, res) => {
  const posts = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `Post ${index + 1}`,
    body: `This is the body of Post ${index + 1}`
  }));

  res.json(posts);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
