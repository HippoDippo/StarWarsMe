const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let savedPeople = [];

app.get('/api/people', (req, res) => {
  res.send(savedPeople);
})

app.put('/api/people/:name', (req, res) => {
  let name = req.params.name;
  let newName = `You are: ${req.body.name}`;
  let index = savedPeople.indexOf(name);

  savedPeople[index] = newName;
  res.status(200).send(savedPeople);
})

app.post('/api/people/', (req, res) => {
  savedPeople.push(req.body.name);
  res.status(200).send(savedPeople);
})


app.delete('/api/people/', (req, res) => {
  savedPeople.splice(req.body.name, 1);
  res.status(200).send(savedPeople);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
