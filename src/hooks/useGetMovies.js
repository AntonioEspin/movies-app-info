import { useEffect, useState } from "react";
import { getMoviesByPopularity, getSearchMovies, getTrendingMovies } from "../services/getMovies";

export function useGetMovies ({search}) {

  const [movies, setMovies] = useState([])
  const [searchMovies, setSearchMovies] = useState([])
  const [errorSearch, setErrorSearch] = useState(false)

  const moviesTrending = async () => {
    const data = await getTrendingMovies()
    setMovies(data)
  }

  const moviesSearch = async (search) => {
    const data = await getSearchMovies(search)
    setSearchMovies(data)
  }

  const moviesByPopularity = async (popularity) => {
    const data = await getMoviesByPopularity(popularity)
    setMovies(data)
  }

  const getMovies = search
    ? searchMovies
    : movies

  useEffect(()=>{
    moviesTrending()
  }, [])

  useEffect(()=>{
    if (getMovies.length === 0) {
      return setErrorSearch(true)
    }

    setErrorSearch(false)
  },[getMovies.length, search])

  return {movies, getMovies, moviesSearch, moviesByPopularity, moviesTrending, errorSearch}
}