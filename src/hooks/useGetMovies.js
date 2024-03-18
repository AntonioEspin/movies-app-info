import { useEffect, useState } from "react";
import { getMoviesByPopularity, getSearchMovies, getTrendingMovies } from "../services/getMovies";

export function useGetMovies ({search}) {

  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState ([])
  const [searchMovies, setSearchMovies] = useState([])
  const [trendingMovies, setTrendingMovies] = useState([])
  const [errorSearch, setErrorSearch] = useState(false)

  const moviesTrending = async () => {
    const data = await getTrendingMovies()
    setTrendingMovies(data)
  }

  const moviesSearch = async (search) => {
    const data = await getSearchMovies(search)
    setSearchMovies(data)
  }

  const moviesByPopularity = async (popularity) => {
    const data = await getMoviesByPopularity(popularity)
    setMovies(data)
    setFilteredMovies(data)
  }

  const filterMovies = (minRated, maxRated) => {
    let filtered = [...movies]

    if (minRated !== null) {
      filtered = filtered.filter(movie => movie.vote_average >= minRated)
    }

    if (maxRated !== null) {
      filtered = filtered.filter(movie => movie.vote_average < maxRated)
    }

    setFilteredMovies(filtered)
  }

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

  return {movies: filteredMovies, searchMovies, filterMovies, trendingMovies, moviesSearch, moviesByPopularity, errorSearch}
}