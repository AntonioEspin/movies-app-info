import { Header } from "./components/Header"
import { Slider } from "./components/Slider"
import { Movies } from "./components/Movies"
import { useGetMovies } from "./hooks/useGetMovies"
import { useState } from "react"
import { ErrorSearchMovie } from "./components/ErrorSearchMovie"
// import dataMovies from './mocks/movies-data.json'

function App() {

  const [search, setSearch] = useState('')
  const {movies, getMovies, moviesSearch, errorSearch} = useGetMovies({search})

  return (
    <>
      <Header
        setSearch={setSearch}
        moviesSearch={moviesSearch}
      />
      <Slider movies={movies}/>
      <Movies movies={getMovies}/>
      {
        errorSearch && <ErrorSearchMovie search={search}/>
      }
    </>
  )
}

export default App
