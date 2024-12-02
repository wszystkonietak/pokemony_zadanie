import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemon({ a }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8080/types')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Otrzymane dane:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>{a}</div>
    </div>
  );
}
 
export default Pokemon;
