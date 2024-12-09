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
    
    <div class="pokemon">
      {lang == "english" && a.name.english}
      {lang == "japanese" && a.name.japanese}
      {lang == "chinese" && a.name.chinese}
      {lang == "french" && a.name.french} 
      <a> {a.base.HP} </a>
      <a>{a.base.Attack} </a>
      <a>{a.base.Defense} </a>
      <a>{a.base["Sp. Attack"]} </a>
      
      
      <img  src={imageList[a.id - 1]} />
      
    </div>
  );
}
 
export default Pokemon;

//