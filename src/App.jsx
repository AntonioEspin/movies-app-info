import { Header } from "./components/Header"
import { Slider } from "./components/Slider"
import { Movies } from "./components/Movies"
import { useGetMovies } from "./hooks/useGetMovies"
import { useState } from "react"
import { ErrorSearchMovie } from "./components/ErrorSearchMovie"
import { ModalMovie } from "./components/ModalMovie"
// import dataMovies from './mocks/movies-data.json'

function App() {

  const [search, setSearch] = useState('')
  const [modalMovie, setModalMovie] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const {movies, trendingMovies, moviesSearch, moviesByPopularity, errorSearch} = useGetMovies({search})

  console.log('cambio')

  return (
    <>
      <Header
        setSearch={setSearch}
        // topRated={topRated}
        moviesSearch={moviesSearch}
        moviesByPopularity={moviesByPopularity}
      />
      <Slider movies={trendingMovies}/>
      <Movies
        movies={movies}
        setModalMovie={setModalMovie}
        setOpenModal={setOpenModal}
      />
      {
        errorSearch && <ErrorSearchMovie search={search}/>
      }
      {
        openModal && 
          <ModalMovie
            movie={modalMovie}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
      }
    </>
  )
}

export default App
