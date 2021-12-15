const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})

app.get('/api/cows', (req, res) => {
  res.send('api request to cows');
})

app.post('/api/cows', (req, res) => {
  //modify memory
  let payload = JSON.parse(req.body.payload);
  console.log(payload);
  res.send(req.body.payload);
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
