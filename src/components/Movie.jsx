import iconStar from '../icons/icon-star.svg'
import '../styles/Movie.css'
const URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

export function Movie ({poster_path, vote_average, title, onClick, setOpenModal }) {

  const isPopularMovie = vote_average >= 7 && 'popular-movie' 

  const handleMovieModal = () => {
    setOpenModal(prevState => !prevState)
    onClick()
  }
  return (
    <article className='movie' onClick={handleMovieModal}>
      <figure className='movie-image'>
        <img src={`${URL_IMAGE}${poster_path}`} alt={title} />
        <div className={`movie-average ${isPopularMovie}`}>
          <img src={iconStar} alt="icon star" />
          <span>{vote_average.toFixed(1)}</span>
        </div>
      </figure>
    </article>
  )
}
