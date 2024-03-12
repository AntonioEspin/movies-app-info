import errorImage from '../images/image-not-movies.svg'
import '../styles/ErrorSearchMovie.css'

export function ErrorSearchMovie ({search}) {
  return (
    <aside className='error-container'>
      <figure>
        <img src={errorImage} alt="image-not-movies" />
      </figure>
      <p>No se encontraron resultados para "{search}"</p>
    </aside>
  )
}