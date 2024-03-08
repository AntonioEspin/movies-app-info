import '../styles/Movies.css'
import { Movie } from './Movie'

export function Movies ({movies}) {
  return (
    <main className='main'>
      <h1></h1>
      <section className='moviesContainer'>
        {
          movies.map(item => (
            <Movie key={item.id} {...item} />
          ))
        }
      </section>
    </main>
  )
}