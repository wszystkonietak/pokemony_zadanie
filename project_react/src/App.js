
import './App.css';
import Pokemon from './Pokemon'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [types, setTypes] = useState([]);
  const [pokemony, setPokemony] = useState([]);


  useEffect(() => {
    axios
      .get('http://localhost:8080/types')
      .then((response) => {
        const new_data =  response.data.map((d) => {
          d.checked = false;
          return d;
        })
        setTypes(new_data);
      })
      .catch((error) => { });
  }, []);

  const changeState = (index) => {
    types[index].checked = ! types[index].checked;
    setTypes([...types])
  }

  useEffect(() => {
    const validTypes = []
    types.map((type2) => {
      if (type2.checked) {
        validTypes.push(type2.english)
      }
    })

    axios
      .get('http://localhost:8080/pokemony', {
        params: {
          validTypesKey: validTypes
        }
      })
      .then((response) => {
        setPokemony(response.data);
      })
      .catch((error) => { });
      
      
  }, [types])


  return (
    <>
      <div>
        {
          types.map((value, index) => {
            return <div> <input type='checkbox' checked={value.checked}  onChange={() => {changeState(index)}}></input>{value.english}</div>
          })
        }
        <Pokemon name></Pokemon>
      </div>
    </>
  );
}

export default App;
