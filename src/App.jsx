import { Header } from "./components/Header"
import { Slider } from "./components/Slider"
import { Movies } from "./components/Movies"
import { useGetMovies } from "./hooks/useGetMovies"
import { useState } from "react"
import { ErrorSearchMovie } from "./components/ErrorSearchMovie"
import { ModalMovie } from "./components/ModalMovie"
import { MoreMovies } from "./components/MoreMovies"
// import dataMovies from './mocks/movies-data.json'

function App() {

  const [search, setSearch] = useState('')
  const [active, setActive] = useState(false)
  const [modalMovie, setModalMovie] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const {movies, searchMovies, filterMovies, trendingMovies, moviesSearch, errorSearch, loadMoreMovies} = useGetMovies({search})


  return (
    <>
      <Header
        setSearch={setSearch}
        filterMovies={filterMovies}
        moviesSearch={moviesSearch}
        setActive={setActive}
      />
      <Slider movies={trendingMovies}/>
      {
        !active
        ? 
          <>
            <Movies
              movies={movies}
              setModalMovie={setModalMovie}
              setOpenModal={setOpenModal}
            />
            <MoreMovies loadMoreMovies={loadMoreMovies}/>
          </>

        :
          <>
            <Movies
              movies={searchMovies}
              setModalMovie={setModalMovie}
              setOpenModal={setOpenModal}
            />
            <MoreMovies loadMoreMovies={loadMoreMovies}/>
          </>
      }
      
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
