import { useEffect, useState } from "react";

export function useGetMovies () {
  const API = 'https://api.themoviedb.org/3/trending/movie/day?language=es'

  const [movies, setMovies] = useState([])

  useEffect(()=>{

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_AUTHORITAZION
      }
    };

    fetch(API, options)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  }, [])

  return {movies}
}