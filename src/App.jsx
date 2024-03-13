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
  const {movies, getMovies, moviesSearch, moviesByPopularity, moviesTrending, errorSearch} = useGetMovies({search})

  return (
    <>
      <Header
        setSearch={setSearch}
        moviesSearch={moviesSearch}
        moviesTrending= {moviesTrending}
        moviesByPopularity={moviesByPopularity}
      />
      <Slider movies={movies}/>
      <Movies
        movies={getMovies}
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
