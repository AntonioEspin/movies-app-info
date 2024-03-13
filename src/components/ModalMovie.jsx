import { Buttons } from './Buttons'
import { Movie } from './Movie'
import '../styles/ModalMovie.css'


export function ModalMovie ({movie, openModal, setOpenModal}) {

  console.log(movie)
  const {title, overview, release_date, media_type} = movie

  const handleModalMovie = () => {
    setOpenModal(prevState => !prevState)
  }
  return (
    <section className='modal-container'>
      <article className="modalMovie">
        <span onClick={handleModalMovie}>X</span>
        <Movie {...movie}/>
        <aside className="modalMovie__info">
          <div className="info">
            <h2>{title}</h2>
            <p>{overview}</p>
            <div className="info__details">
              <span>{release_date}</span>
              <span>{media_type}</span>
            </div>
          </div>
          <Buttons openModal={openModal}/>
        </aside>
      </article>
    </section>
  )
}