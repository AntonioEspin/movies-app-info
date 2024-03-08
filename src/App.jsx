import { useState } from "react"
import { Header } from "./components/Header"
import { Movies } from "./components/Movies"
import dataMovies from './mocks/movies-data.json'

function App() {

  const [movies, setMovies] = useState(dataMovies.results)

  return (
    <>
      <Header/>
      <Movies movies={movies}/>
    </>
  )
}

export default App
