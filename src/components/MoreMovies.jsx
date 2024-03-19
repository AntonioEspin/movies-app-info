import '../styles/MoreMovies.css'

export function MoreMovies ({loadMoreMovies}) {

  const handleMoviesSearch = () => {
    loadMoreMovies()
  }

  return (
    <button className="moreMovies" onClick={handleMoviesSearch}>More Movies</button>
  )
}