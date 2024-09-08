import { useState, useEffect } from 'react';

export const useFetch = (api, queryTerm = '') => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${api}?api_key=d6113b9aa3f89f46512368fe8d5837ac&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
