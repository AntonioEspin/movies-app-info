import '../styles/Movies.css'
import { Movie } from './Movie'

export function Movies ({movies, setModalMovie, setOpenModal}) {

  const handleModalMovie = (item) => {
    setModalMovie(item)
  }
  return (
    <main className='main'>
      <h1>Todas las películas</h1>
      <section className='moviesContainer'>
        {
          movies?.map(item => (
            <Movie
              key={item.id}
              onClick={()=>handleModalMovie(item)}
              setOpenModal={setOpenModal}
              {...item}
            
            />
          ))
        }
      </section>
    </main>
  )
}