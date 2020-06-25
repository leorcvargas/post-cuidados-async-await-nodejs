const bodyParser = require('body-parser');
const express = require('express');

const bookService = require('./bookService');
const userService = require('./userService');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.path}`);

  next();
})

app.get('/books/example1', async (req, res) => {
  const bookData = await bookService.getBookDataExample1('foobar');

  res.status(200).send({ data: bookData });
});

app.get('/books/example2', async (req, res) => {
  const bookData = await bookService.getBookDataExample2('foobar');

  res.status(200).send({ data: bookData });
});

app.post('/users/signup/sync-hash', async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.signUpWithSyncHash(email, password);

  res.status(200).send({ data: user });
});

app.post('/users/signup/async-hash', async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.signUpWithAsyncHash(email, password);

  res.status(200).send({ data: user });
});

app.listen(3000, err => {
  if (err) {
    throw err;
  }

  console.log('Server listening to port 3000');
});
