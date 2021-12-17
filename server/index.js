const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const mysql = require('mysql2');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());

const cowlink = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cow_data'
})

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})

app.get('/api/cows', (req, res) => {
  //send database
  cowlink.execute(
    'select * from `cows`',
    (err, results, fields) => {
      console.log('sending cows...');
      res.json(results);
    }
  )
})

app.post('/api/cows', (req, res) => {
  //modify memory
  console.log(req.body.payload);
  let payload = req.body.payload;
  console.log(payload);
  cowlink.execute(
    'insert into `cows` (name, description) values (?, ?)',
    [payload.name, payload.description],
    (err, results, fields) => {
      if (err) {
        console.error(err);
      } else {
        res.send(`successfully POSTed ${payload} to /api/cows`);
      }
    }
  )

})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
