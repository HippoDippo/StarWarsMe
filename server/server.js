const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

let people = [{id: 1, name: 'Luke Skywalker'}, {id: 2, name: 'Darth Vader'}, {id: 3, name: 'Leia Organa'}, {id: 4, name: 'Obi-Wan Kenobi'}];

app.use(cors());
app.use(bodyParser.json());

let savedPeople = [];

app.get('/api/people', (req, res) => {
  res.send(savedPeople);
})

app.put('/api/people/', (req, res) => {
  
})

app.post('/api/people/', (req, res) => {
  savedPeople.push(req.body.name);
  res.status(200).send(savedPeople);
})

app.delete('/api/people/:id', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})



