import './Pokemon.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const images = require.context('./images', true);
const imageList = images.keys().map(image => images(image));

function Pokemon({ a, lang }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    
    <div className="pokemon" >
      {lang == "english" && a.name.english}
      {lang == "japanese" && a.name.japanese}
      {lang == "chinese" && a.name.chinese}
      {lang == "french" && a.name.french} 
      <br></br>
      <a> HP: {a.base.HP} </a>
      <a> Attack: {a.base.Attack} </a>
      <a> Defense: {a.base.Defense} </a><br></br>
      <a> Sp. Attack: {a.base["Sp. Attack"]} </a>
      <a> Sp. Defense: {a.base["Sp. Defense"]} </a>
      <a> Speed: {a.base["Speed"]} </a><br></br>
      {
        a.type.map((pokemon_type) => {
          return <a>{pokemon_type} </a>
        })
      }
      
      <img  src={imageList[a.id - 1]} />
      
    </div>
  );
}
 
export default Pokemon;

//