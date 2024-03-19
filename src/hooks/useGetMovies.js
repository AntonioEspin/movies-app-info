import { useCallback, useEffect, useState } from "react";
import { getMoviesByPopularity, getSearchMovies, getTrendingMovies } from "../services/getMovies";

export function useGetMovies ({search}) {

  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState ([])
  const [searchMovies, setSearchMovies] = useState([])
  const [trendingMovies, setTrendingMovies] = useState([])
  const [page, setPage] = useState(1)
  const [errorSearch, setErrorSearch] = useState(false)

  const loadMoreMovies = () => {
    setPage( prevState => prevState + 1)
  }

  const moviesTrending = async () => {
    const data = await getTrendingMovies()
    setTrendingMovies(data)
  }

  const moviesSearch = async (search) => {
    const data = await getSearchMovies(search)
    setSearchMovies(data)
  }

  const moviesByPopularity = useCallback(async () => {
    const data = await getMoviesByPopularity(page)
    setMovies((prevMovies) => [...prevMovies, ...data])
    setFilteredMovies((prevMovies) => [...prevMovies, ...data])
  },[page])

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
  }, [])

  useEffect(()=>{
    moviesByPopularity()
  }, [moviesByPopularity])

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setErrorSearch(true);
    } else {
      setErrorSearch(false);
    }
  }, [filteredMovies.length, search]);

  return {movies: filteredMovies, searchMovies, filterMovies, trendingMovies, moviesSearch, moviesByPopularity, errorSearch, loadMoreMovies}
}