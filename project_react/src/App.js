
import './App.css';
import Pokemon from './Pokemon'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/types')
      .then((response) => {
        setTypes(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
    <div>
      {
        types.map((type) => {
          return <div>{type.english}</div>
        })
      }
      <Pokemon name></Pokemon>
    </div>
    </>
  );
}

export default App;
