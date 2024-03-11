import { Header } from "./components/Header"
import { Slider } from "./components/Slider"
import { Movies } from "./components/Movies"
import { useGetMovies } from "./hooks/useGetMovies"
// import dataMovies from './mocks/movies-data.json'

function App() {

  const {movies} = useGetMovies()

  return (
    <>
      <Header/>
      <Slider movies={movies}/>
      <Movies movies={movies}/>
    </>
  )
}

export default App
