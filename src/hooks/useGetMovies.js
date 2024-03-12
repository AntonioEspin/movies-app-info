import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/getMovies";

export function useGetMovies () {

  const [movies, setMovies] = useState([])

  const moviesTrending = async () => {
    const data = await getTrendingMovies()
    setMovies(data)
  }

  useEffect(()=>{
    moviesTrending()
  }, [])

  return {movies}
}