import { useEffect, useState } from "react";
import { getMoviesByPopularity, getSearchMovies, getTrendingMovies } from "../services/getMovies";

export function useGetMovies ({search}) {

  const [movies, setMovies] = useState([])
  const [trendingMovies, setTrendingMovies] = useState([])
  const [errorSearch, setErrorSearch] = useState(false)

  const moviesTrending = async () => {
    const data = await getTrendingMovies()
    setTrendingMovies(data)
  }

  const moviesSearch = async (search) => {
    const data = await getSearchMovies(search)
    setMovies(data)
  }

  const moviesByPopularity = async (popularity) => {
    const data = await getMoviesByPopularity(popularity)
    setMovies(data)
  }

  // Filtrar peliculas con puntaje mayor a 7
  // const topRated = () => {
  //   const newMovies = [...movies]
  //   const topMovies = newMovies.filter(movie => movie?.vote_average >= 7)
  //   console.log(topMovies)
  //   setMovies(topMovies)
  // }

  useEffect(()=>{
    moviesTrending()
    moviesByPopularity()
  }, [])

  useEffect(()=>{
    if (movies.length === 0) {
      return setErrorSearch(true)
    }

    setErrorSearch(false)
  },[movies.length, search])

  return {movies, setMovies, trendingMovies, moviesSearch, moviesByPopularity, errorSearch}
}