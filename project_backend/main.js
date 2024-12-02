
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

const path = require('path'); 

app.use(cors());


const filePath = path.join(__dirname, 'pokedex.json');
const typesPath = path.join(__dirname, 'types.json');
const parsedData = "";

const data = JSON.parse(fs.readFileSync( filePath ).toString());
const types = JSON.parse(fs.readFileSync( typesPath ).toString());



app.get('/', (req, res) => {
  
  const obj = JSON.parse(json);
  res.send(obj.count); 
});

app.get('/data', (req, res) => {
  //res.json(parsedData[0].name.english);
  res.json(parsedData);

});

app.get('/types', (req, res) => {

  res.send(types); 
});

app.get('/dwa', (req, res) => {
  res.send(data); 
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});