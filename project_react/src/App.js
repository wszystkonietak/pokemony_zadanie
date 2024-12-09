
import './App.css';
import Pokemon from './Pokemon'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [types, setTypes] = useState([]);
  const [pokemony, setPokemony] = useState([]);
  const [language, setLanguage] = useState("english");


  useEffect(() => {
    axios
      .get('http://localhost:8080/types')
      .then((response) => {
        const new_data =  response.data.map((d) => {
          d.checked = true;
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
      <input type='radio' defaultChecked={true} name="a" onClick={() => {setLanguage("english")}}></input>english<br></br>
      <input type='radio' name="a" onClick={() => {setLanguage("japanese")}}></input>japanese<br></br>
      <input type='radio' name="a" onClick={() => {setLanguage("chinese")}}></input>chinese<br></br>
      <input type='radio' name="a" onClick={() => {setLanguage("french")}}></input>french<br></br>
      <div>
        {
          types.map((value, index) => {
            return <div> <input type='checkbox' checked={value.checked}  onChange={() => {changeState(index)}}></input>{value.english}</div>
          })
        }
        <div id='pokemony_tablica'>
        {
          pokemony.map((value, index) => {
            return <Pokemon a={value} lang={language}></Pokemon>
          })
        }
        </div>
      </div>
    </>
  );
}

export default App;
