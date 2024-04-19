import React, { useState, useEffect } from 'react';

export default function GameDayApi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}