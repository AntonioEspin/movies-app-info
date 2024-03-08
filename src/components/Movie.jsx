import '../styles/Movie.css'
const URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

export function Movie ({poster_path, vote_average, title }) {
  return (
    <article>
      <figure>
        <img src={`${URL_IMAGE}${poster_path}`} alt={title} />
      </figure>
      <div>
        <img src="" alt="" />
        <span>{vote_average}</span>
      </div>
    </article>
  )
}