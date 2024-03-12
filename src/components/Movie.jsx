import iconStar from '../icons/icon-star.svg'
import '../styles/Movie.css'
const URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

export function Movie ({poster_path, vote_average, title }) {

  const isPopularMovie = vote_average >= 7 && 'popular-movie' 
  return (
    <article className='movie'>
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
