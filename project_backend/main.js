
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

app.get('/pokemony', (req, res) => {
  console.log(req.query)
  let isPokemonValid = false;
  const new_pokemony = [];
  data.map((pokemon) => {
    isPokemonValid = false;
    pokemon.type.map((pokemon_type) => {
      req.query.validTypesKey.map((type) => {
        if(type == pokemon_type) {
          isPokemonValid = true;
        }
      })
    })    
    if(isPokemonValid) {
      new_pokemony.push(pokemon)
    }
  })
  res.send(new_pokemony); 
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});